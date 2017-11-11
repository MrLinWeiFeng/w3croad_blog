# git使用总结

## 问题

1. 本地新建了很多文件夹和文件，`commit` 提交时报错 `error: pathspec 'html' did not match any file(s) known to git.`。

直接执行下面语句：

```
git commit -m "提交"
```

2. 不能直接 `push`，需要先 `commit`。