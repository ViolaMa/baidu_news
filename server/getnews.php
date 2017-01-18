<?php
    header("Content-type:application/json; charset = utf-8");

	$con = mysql_connect('localhost','root','');
	if(!$con){
		die('Could not connect:'.mysql_error());
	}
	else{
		mysql_select_db('news',$con);
		$sql = 'SELECT * from newsList';
		mysql_query("set names 'utf8'");
		$result = mysql_query($sql,$con);

		$arr = array();
		while($row = mysql_fetch_array($result)){
		array_push($arr,array("newstitle")=>$row['newstitle'])}
	}
//    $arr = array(
//        'newstitle'=>'用电回升透露了哪些经济信号',
//        'newstype'=>'财经',
//        'newsimg'=>'images/news_2.jpg',
//        'newstime'=>'2016-1-18',
//        'newssrc'=>'网易新闻');
//
//    echo json_encode($arr);
?>