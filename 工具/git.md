# git使用总结

地址： `https://git-scm.com/docs/git-reflog`

## 切换版本

```
git log
git reflog  可以查看所有分支的所有操作记录，包括 commit 和 reset的操作。
git checkout fdss22
```

## 创建和合并分支

新建并切换到分支。

```
git checkout -b w0  // -b 表示切换到分支

// 相当于下面2条命令
git branch w0  // 创建分支
git checkout w0  // 切换到分支

git merge w0 

git branch -d w0  // 删除w0分支
```

当产生冲突时，处理之后再add提交。

**创建忽略文件.gitignore**

新建一个名叫 `.gitignore` 的文件，并添加如下代码:

```
node_modules
.gitignore
```

这样在提交的时候，就会忽略上面的这些文件。

## 问题

1. 本地新建了很多文件夹和文件，`commit` 提交时报错 `error: pathspec 'html' did not match any file(s) known to git.`。

直接执行下面语句：

```
git commit -m "提交"
```

2. 不能直接 `push`，需要先 `commit`。


3. `git status` 时，中文转义了，解决方法是让 `git` 不处理 `utf-8` 文件名。

```
git config --global core.quotepath false
```


## 参考资料

- [git book pro](https://git-scm.com/book/zh/v2)