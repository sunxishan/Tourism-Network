var tabs=document.getElementById('tabs');
var aa=document.getElementById('aa');
var lis=tabs.getElementsByTagName('li');
var divs=aa.getElementsByTagName('div');
for (var i=0;i<lis.length;i++) {
	lis[i].index=i;
	lis[i].onclick=function () {
		for (var i=0;i<lis.length;i++) {
			lis[i].className='';
			divs[i].className='';
		}
		this.className='active';
		divs[this.index].className='show';
	}
}