![Build Status](https://travis-ci.org/akveo/ng2-first-table.svg?branch=master)

# Angular2 first Table 组件

### Demo

<a target="_blank" href="https://ascode.github.io/ng2-first-table/">查看演示</a>

![alt tag](src/assets/img/demo.gif)

## 安装

该库可用作npm软件包，因此您只需运行以下命令即可：（如果不是新手，建议先装淘宝镜像端，因为cnpm更快）

```
npm install --save ng2-first-table
```

该命令将在您的`package.json`文件中创建一个记录，并将该包安装到npm modules文件夹中。

## 最简单的设置示例

首先需要将ng2-first-table指令导入到组件中。

```

import { Ng2FirstTableModule } from 'ng2-first-table';

```

然后通过添加到您的模块的指令列表来注册它：

```
// ...

@NgModule({
  imports: [
    // ...
    
    Ng2FirstTableModule,
    
    // ...
  ],
  declarations: [ ... ]
})
// ...
```

现在，我们需要配置表并将其添加到模板中。 组件开始工作的唯一必需设置是列配置。 我们在组件中注册设置属性，我们想要具有表并配置一些列[Settings documentation](https://ascode.github.io/ng2-first-table/#/documentation)：
    
```
settings = {
  columns: {
    id: {
      title: 'ID'
    },
    name: {
      title: 'Full Name'
    },
    username: {
      title: 'User Name'
    },
    email: {
      title: 'Email'
    }
  }
};
```

最后，我们将ng2-first-table组件放在模板中：

```
// ...

@Component({
  template: `
    <ng2-first-table [settings]="settings"></ng2-first-table>
  `
})
// ...
```
在此步骤中，您将拥有一个最小配置的表。 默认情况下，所有功能都可用，您无需配置它们，因此现在您可以添加/编辑/删除行，对表进行排序或过滤。
 
仍然似乎缺少一些东西...对，默认情况下，表中没有数据。 要添加一些，我们创建一个数组属性与组件中的对象列表。 请注意，对象键与列配置中的相同。

```
data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  },
  
  // ... list of items
  
  {
    id: 11,
    name: "Nicholas DuBuque",
    username: "Nicholas.Stanton",
    email: "Rey.Padberg@rosamond.biz"
  }
];
```

And pass the data to the table:

```
// ...

@Component({
  template: `
    <ng2-first-table [settings]="settings" [source]="data"></ng2-first-table>
  `
})
// ...
```

现在你有一些数据在表中。
 
## 进一步的文档
安装，定制等有用的文档: https://ascode.github.io/ng2-first-table/

## How can I support developers?

- 可以关注我们的：[Github](https://github.com/wangraoji/ng2-first-table)
- 创建拉请求，提交错误，建议新功能


## 特征
* 本地数据源（Server / API DataSource正在进行中）
* 过滤
* 排序
* 分页
* 内联添加/编辑/删除
* 灵活的事件模型

## 感谢我们的历史贡献者！ 
<!-- https://github.com/ascode -->
<!-- https://avatars0.githubusercontent.com/u/2718661?v=4&s=400 -->
[<img alt="nnixaa" src="https://avatars0.githubusercontent.com/u/230527?v=3&s=60" width="60">](https://github.com/nnixaa)[<img alt="lexzhukov" src="https://avatars0.githubusercontent.com/u/12192373?v=3&s=60" width="60">](https://github.com/lexzhukov)[<img alt="damnko" src="https://avatars2.githubusercontent.com/u/680205?v=3&s=60" width="60">](https://github.com/damnko)[<img alt="Tibing" src="https://avatars2.githubusercontent.com/u/17410089?v=3&s=60" width="60">](https://github.com/Tibing)[<img alt="Ezeon" src="https://avatars0.githubusercontent.com/u/21973741?v=3&s=60" width="60">](https://github.com/Ezeon)[<img alt="Deilan" src="https://avatars1.githubusercontent.com/u/4777512?v=3&s=60" width="60">](https://github.com/Deilan)[<img alt="hoswey" src="https://avatars0.githubusercontent.com/u/3689445?v=3&s=60" width="60">](https://github.com/hoswey)[<img alt="stacyakveo" src="https://avatars2.githubusercontent.com/u/27723447?v=3&s=60" width="60">](https://github.com/stacyakveo)[<img alt="Akshaymisal5" src="https://avatars3.githubusercontent.com/u/15906551?v=3&s=60" width="60">](https://github.com/Akshaymisal5)[<img alt="geneeblack" src="https://avatars0.githubusercontent.com/u/282525?v=3&s=60" width="60">](https://github.com/geneeblack)[<img alt="vvandoorne" src="https://avatars2.githubusercontent.com/u/26658175?v=3&s=60" width="60">](https://github.com/vvandoorne)[<img alt="ananthhh" src="https://avatars1.githubusercontent.com/u/3583234?v=3&s=60" width="60">](https://github.com/ananthhh)[<img alt="bis-sb" src="https://avatars1.githubusercontent.com/u/22668001?v=3&s=60" width="60">](https://github.com/bis-sb)[<img alt="tadashi-aikawa" src="https://avatars1.githubusercontent.com/u/9500018?v=3&s=60" width="60">](https://github.com/tadashi-aikawa)

[<img alt="nureha" src="https://avatars2.githubusercontent.com/u/7064537?v=3&s=60" width="60">](https://github.com/nureha)[<img alt="vlupu10" src="https://avatars1.githubusercontent.com/u/3597512?v=3&s=60" width="60">](https://github.com/vlupu10)[<img alt="zhouhao27" src="https://avatars1.githubusercontent.com/u/8099731?v=3&s=60" width="60">](https://github.com/zhouhao27)[<img alt="hkb1990" src="https://avatars1.githubusercontent.com/u/2637138?v=3&s=60" width="60">](https://github.com/hkb1990)[<img alt="liaosong" src="https://avatars0.githubusercontent.com/u/3927282?v=3&s=60" width="60">](https://github.com/liaosong)[<img alt="ktriek" src="https://avatars2.githubusercontent.com/u/4461059?v=3&s=60" width="60">](https://github.com/ktriek)

## 特别感谢我们的现有维护者！ 
[<img alt="nnixaa" src="https://avatars0.githubusercontent.com/u/2718661?v=4&s=400" width="60">](https://github.com/ascode)    [<img alt="nnixaa" src="https://avatars3.githubusercontent.com/u/24467663?v=4&s=400" width="60">](https://github.com/wangraoji)

