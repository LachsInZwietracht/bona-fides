#!/usr/bin/env python3
"""
Safe Digitale Spur Article Deletion Script
Deletes duplicate articles one by one with system testing after each deletion
Based on analysis: 11 duplicate articles identified (55% reduction)
"""

import subprocess
import sys
from pathlib import Path
import time

class SafeDigitaleSpurDeleter:
    def __init__(self, articles_dir: str):
        self.articles_dir = Path(articles_dir)
        self.project_dir = self.articles_dir.parent.parent

        # Articles to delete based on analysis
        # Keep articles #1-7, #8, #13 - delete #9-12 and #14-20
        # Cluster 1: #9-12 are identical to #8
        # Cluster 2: #14-20 are identical to #13
        self.deletion_list = [
            "009-digitale-spur-9-moderne-ermittlungstechniken-im-netz.md",
            "010-digitale-spur-10-moderne-ermittlungstechniken-im-netz.md",
            "011-digitale-spur-11-moderne-ermittlungstechniken-im-netz.md",
            "012-digitale-spur-12-moderne-ermittlungstechniken-im-netz.md",
            "014-digitale-spur-14-moderne-ermittlungstechniken-im-netz.md",
            "015-digitale-spur-15-moderne-ermittlungstechniken-im-netz.md",
            "016-digitale-spur-16-moderne-ermittlungstechniken-im-netz.md",
            "017-digitale-spur-17-moderne-ermittlungstechniken-im-netz.md",
            "018-digitale-spur-18-moderne-ermittlungstechniken-im-netz.md",
            "019-digitale-spur-19-moderne-ermittlungstechniken-im-netz.md",
            "020-digitale-spur-20-moderne-ermittlungstechniken-im-netz.md",
        ]

        self.deleted_files = []
        self.failed_deletions = []

    def run_command(self, command: list, description: str) -> bool:
        """Run command and return success status"""
        try:
            print(f"  Running: {description}")
            result = subprocess.run(
                command,
                cwd=self.project_dir,
                capture_output=True,
                text=True,
                timeout=60
            )

            if result.returncode == 0:
                print(f"  ✅ {description} passed")
                return True
            else:
                print(f"  ❌ {description} failed:")
                print(f"     stdout: {result.stdout}")
                print(f"     stderr: {result.stderr}")
                return False

        except subprocess.TimeoutExpired:
            print(f"  ⏰ {description} timed out")
            return False
        except Exception as e:
            print(f"  💥 {description} error: {e}")
            return False

    def test_blog_system(self) -> bool:
        """Test that blog system still works"""
        tests = [
            (["npm", "run", "typecheck"], "TypeScript check"),
            (["npm", "run", "lint"], "ESLint check")
        ]

        for command, description in tests:
            if not self.run_command(command, description):
                return False

        return True

    def delete_article(self, filename: str) -> bool:
        """Delete single article with safety checks"""
        filepath = self.articles_dir / filename

        if not filepath.exists():
            print(f"  ⚠️  File {filename} doesn't exist, skipping")
            return True

        try:
            # Delete the file
            filepath.unlink()
            print(f"  🗑️  Deleted {filename}")
            return True
        except Exception as e:
            print(f"  ❌ Failed to delete {filename}: {e}")
            return False

    def safe_deletion_process(self):
        """Main deletion process with testing after each deletion"""
        print(f"🚀 Starting safe deletion of {len(self.deletion_list)} duplicate Digitale Spur articles")
        print(f"📁 Working directory: {self.project_dir}")
        print(f"📄 Articles directory: {self.articles_dir}")
        print("")

        # Initial system test
        print("🔍 Testing blog system before any deletions...")
        if not self.test_blog_system():
            print("❌ Blog system test failed before deletion. Aborting.")
            return False

        print("✅ Blog system healthy, starting deletions...\\n")

        # Delete articles one by one
        for i, filename in enumerate(self.deletion_list, 1):
            print(f"🗑️  Step {i}/{len(self.deletion_list)}: Deleting {filename}")

            # Delete the article
            if self.delete_article(filename):
                self.deleted_files.append(filename)

                # Test system after deletion
                print(f"🔍 Testing blog system after deleting {filename}...")
                if self.test_blog_system():
                    print(f"✅ System stable after deleting {filename}\\n")
                else:
                    print(f"❌ System failed after deleting {filename}!")
                    print(f"🚨 ROLLBACK: Restoring {filename}")

                    # Try to restore from backup (would need to be created first)
                    backup_file = self.project_dir / "blog" / f"articles_backup_digitale_spur_20251226_213251" / filename
                    if backup_file.exists():
                        try:
                            import shutil
                            shutil.copy2(backup_file, self.articles_dir / filename)
                            print(f"✅ Restored {filename} from backup")
                        except Exception as e:
                            print(f"❌ Failed to restore {filename}: {e}")

                    self.failed_deletions.append(filename)
                    break
            else:
                self.failed_deletions.append(filename)
                print(f"❌ Failed to delete {filename}, stopping process")
                break

            # Small pause to avoid overwhelming the system
            time.sleep(0.5)

        # Final summary
        self.print_summary()
        return len(self.failed_deletions) == 0

    def print_summary(self):
        """Print deletion summary"""
        print("\\n" + "="*60)
        print("📊 DIGITALE SPUR DELETION SUMMARY")
        print("="*60)
        print(f"✅ Successfully deleted: {len(self.deleted_files)} articles")
        print(f"❌ Failed deletions: {len(self.failed_deletions)}")
        print(f"📈 Reduction achieved: {len(self.deleted_files)}/20 articles ({len(self.deleted_files)/20*100:.1f}%)")

        if self.failed_deletions:
            print(f"\\n❌ Failed files:")
            for filename in self.failed_deletions:
                print(f"  - {filename}")

        remaining_articles = 20 - len(self.deleted_files)
        print(f"\\n📋 Articles remaining: {remaining_articles}")
        print("   Preserved unique articles: #1-7, #8, #13")

def main():
    articles_dir = "/Users/fabianradlow/Documents/Code-Projekte/Operation Bona Fides/blog/articles"
    deleter = SafeDigitaleSpurDeleter(articles_dir)

    success = deleter.safe_deletion_process()

    if success:
        print("\\n🎉 Safe Digitale Spur deletion process completed successfully!")
    else:
        print("\\n⚠️  Deletion process encountered issues. Check output above.")

    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())