- 脚本放在lizard下xml_test/working_area
- 工作目录
	- working area dir
		- input dir
		- output dir
- xml2csv 程序流程
	- input 区域get 所有xml 文件列表
		- files = os.listdir(path)
		- (file,ext)= os.path.splitext(url)
	- 函数 process_xml
		- 输入是每一个xml文件
		- 处理结果: 同名的csv到output 目录下面
		- 不管有多少层嵌套标签，取值方式就三种
			- 1.如果获取标签信息，就使用xxx.getElementsByTagName('xx')，
			- 2.如果获取属性信息，就用xxx.attributes['xx'].value，
			- 3.如果获取标签内容，就用firstChild.data
		- 取得父节点用xxx.parentNode （花了不少时间）
		- 还有如果firstChild data 为空，需要提前判断，否则脚本报错（花了不少时间）
	- 




excel 条件格式（不是完全理解）：


  =IF(MOD(FLOOR((ROW()-2)/7,1),2)=1,"",INDIRECT("A"&(FLOOR((ROW()-2)/7,1)*7+2)))<>""
  =IF(MOD(FLOOR((ROW()-2)/7,1),2)=0,"",INDIRECT("A"&(FLOOR((ROW()-2)/7,1)*7+2)))<>""
  =IF(MOD(ROW(),7)=1,INDIRECT("A"&(FLOOR((ROW()-2)/7,1)*7+2)),"")=""
  =IF(MOD(ROW(),7)=2,"",INDIRECT("A"&(FLOOR((ROW()-2)/7,1)*7+2)))<>""
  
