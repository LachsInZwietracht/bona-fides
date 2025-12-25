#!/usr/bin/env python3
"""
Safe Cyberbetrug Article Deletion Script
Deletes duplicate articles one by one with system testing after each deletion
"""

import subprocess
import sys
from pathlib import Path
import time

class SafeDeleter:
    def __init__(self, articles_dir: str):
        self.articles_dir = Path(articles_dir)
        self.project_dir = self.articles_dir.parent.parent

        # Articles to delete based on analysis
        self.deletion_list = [
            # Group B: Delete articles #34-55 (keep #33)
            "034-cyberbetrug-34-neue-maschen-und-wie-man-sich-schuetzt.md",
            "035-cyberbetrug-35-neue-maschen-und-wie-man-sich-schuetzt.md",
            "036-cyberbetrug-36-neue-maschen-und-wie-man-sich-schuetzt.md",
            "037-cyberbetrug-37-neue-maschen-und-wie-man-sich-schuetzt.md",
            "038-cyberbetrug-38-neue-maschen-und-wie-man-sich-schuetzt.md",
            "039-cyberbetrug-39-neue-maschen-und-wie-man-sich-schuetzt.md",
            "040-cyberbetrug-40-neue-maschen-und-wie-man-sich-schuetzt.md",
            "041-cyberbetrug-41-neue-maschen-und-wie-man-sich-schuetzt.md",
            "042-cyberbetrug-42-neue-maschen-und-wie-man-sich-schuetzt.md",
            "043-cyberbetrug-43-neue-maschen-und-wie-man-sich-schuetzt.md",
            "044-cyberbetrug-44-neue-maschen-und-wie-man-sich-schuetzt.md",
            "045-cyberbetrug-45-neue-maschen-und-wie-man-sich-schuetzt.md",
            "046-cyberbetrug-46-neue-maschen-und-wie-man-sich-schuetzt.md",
            "047-cyberbetrug-47-neue-maschen-und-wie-man-sich-schuetzt.md",
            "048-cyberbetrug-48-neue-maschen-und-wie-man-sich-schuetzt.md",
            "049-cyberbetrug-49-neue-maschen-und-wie-man-sich-schuetzt.md",
            "050-cyberbetrug-50-neue-maschen-und-wie-man-sich-schuetzt.md",
            "051-cyberbetrug-51-neue-maschen-und-wie-man-sich-schuetzt.md",
            "052-cyberbetrug-52-neue-maschen-und-wie-man-sich-schuetzt.md",
            "053-cyberbetrug-53-neue-maschen-und-wie-man-sich-schuetzt.md",
            "054-cyberbetrug-54-neue-maschen-und-wie-man-sich-schuetzt.md",
            "055-cyberbetrug-55-neue-maschen-und-wie-man-sich-schuetzt.md",
            # Group A: Delete articles #24-32 (keep #23)
            "024-cyberbetrug-24-neue-maschen-und-wie-man-sich-schuetzt.md",
            "025-cyberbetrug-25-neue-maschen-und-wie-man-sich-schuetzt.md",
            "026-cyberbetrug-26-neue-maschen-und-wie-man-sich-schuetzt.md",
            "027-cyberbetrug-27-neue-maschen-und-wie-man-sich-schuetzt.md",
            "028-cyberbetrug-28-neue-maschen-und-wie-man-sich-schuetzt.md",
            "029-cyberbetrug-29-neue-maschen-und-wie-man-sich-schuetzt.md",
            "030-cyberbetrug-30-neue-maschen-und-wie-man-sich-schuetzt.md",
            "031-cyberbetrug-31-neue-maschen-und-wie-man-sich-schuetzt.md",
            "032-cyberbetrug-32-neue-maschen-und-wie-man-sich-schuetzt.md",
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
        print(f"🚀 Starting safe deletion of {len(self.deletion_list)} duplicate articles")
        print(f"📁 Working directory: {self.project_dir}")
        print(f"📄 Articles directory: {self.articles_dir}")
        print("")

        # Initial system test
        print("🔍 Testing blog system before any deletions...")
        if not self.test_blog_system():
            print("❌ Blog system test failed before deletion. Aborting.")
            return False

        print("✅ Blog system healthy, starting deletions...\n")

        # Delete articles one by one
        for i, filename in enumerate(self.deletion_list, 1):
            print(f"🗑️  Step {i}/{len(self.deletion_list)}: Deleting {filename}")

            # Delete the article
            if self.delete_article(filename):
                self.deleted_files.append(filename)

                # Test system after deletion
                print(f"🔍 Testing blog system after deleting {filename}...")
                if self.test_blog_system():
                    print(f"✅ System stable after deleting {filename}\n")
                else:
                    print(f"❌ System failed after deleting {filename}!")
                    print(f"🚨 ROLLBACK: Restoring {filename}")

                    # Try to restore from backup
                    backup_file = self.project_dir / "blog" / f"articles_backup_20251225_175521" / filename
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
        print("\n" + "="*60)
        print("📊 DELETION SUMMARY")
        print("="*60)
        print(f"✅ Successfully deleted: {len(self.deleted_files)} articles")
        print(f"❌ Failed deletions: {len(self.failed_deletions)}")
        print(f"📈 Reduction achieved: {len(self.deleted_files)}/35 articles ({len(self.deleted_files)/35*100:.1f}%)")

        if self.failed_deletions:
            print(f"\n❌ Failed files:")
            for filename in self.failed_deletions:
                print(f"  - {filename}")

        remaining_articles = 35 - len(self.deleted_files)
        print(f"\n📋 Articles remaining: {remaining_articles}")
        print("   Preserved unique articles: #1, #2, #23, #33")

def main():
    articles_dir = "/Users/fabianradlow/Documents/Code-Projekte/Operation Bona Fides/blog/articles"
    deleter = SafeDeleter(articles_dir)

    success = deleter.safe_deletion_process()

    if success:
        print("\n🎉 Safe deletion process completed successfully!")
    else:
        print("\n⚠️  Deletion process encountered issues. Check output above.")

    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())