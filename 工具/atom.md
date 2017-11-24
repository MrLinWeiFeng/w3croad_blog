# atom

## atom安装不上插件的解决方法

根据下面步骤进行安装即可。

```
cd ~/.atom/packages
git clone https://github.com/facebook/nuclide.git
cd nuclide
npm install
```

如果 `git clone` 失败，`fork` 一份到自己目录，然后克隆自己仓库的。