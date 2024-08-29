## Flow

```
1. git init
   1. git config user.name "your-name"
   2. git config user.email "name@mail.com"
2. git add main.js
3. git status
4. git commit -m "First commit"
5. git log --oneline
6. git branch feature-add
   1. git checkout feature-add
   2. git add
   3. git commit
   4. git log
      1. git checkout main
      2. git merge feature-add
      3. git branch -d feature-add

7. git branch feature-sub
8. git checkout feature-sub
   1. git add libs/sub.js
   2. git stash
   3. git checkout main
      1. git branch hotfix-add
      2. git checkout hotfix-add
         1. git add (1st fix)
         2. git commit -m "Fix missing require."
            1. git checkout feature-sub
            2. git stash list
            3. git stash pop
            4. git add main.js
            5. git commit -m "Add log."
               1. git checkout hotfix-add
               2. git add (2nd fix)
               3. git commit -m "Fix missing spread operator."
                  1. git checkout main
                  2. git cherry-pick SHA
                     1. git checkout feature-sub
                     2. git rebase main
                        1. git checkout main
                        2. git merge feature-sub
```
