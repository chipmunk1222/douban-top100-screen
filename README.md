# 项目简介
使用Python爬虫+Echarts制作的可视化大屏，服务于数据分析的数据可视化，其中爬虫数据以csv格式存储在excel表格中
数据来源网站：https://movie.douban.com/top250

# 实现功能
- python部分使用beautifulsoup和request库解析并爬取网站数据，使用pandas进行csv表格读写
- 前端页面使用Echarts描述数据间的关系，其中，数据关系包括评分分布、评分——人数分布，发布时间分布、畅销类型占比、地区权重等五项
- 使用flexible.js+rem布局方式实现自适应布局
- 使用geo.js插件实现中央热力图绘制

# 技术文档
浅谈数据分析：https://www.chipmunk.top/posts/dc646f210e63/

Echarts使用方案：https://www.chipmunk.top/posts/748eb145ed66/

# 项目预览
![https://res.cloudinary.com/dobligy9s/image/upload/v1741707779/douban-big-screen_dsr6ib.jpg](https://res.cloudinary.com/dobligy9s/image/upload/v1741707779/douban-big-screen_dsr6ib.jpg)

