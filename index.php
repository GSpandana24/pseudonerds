<?php

mysqli_connect("9.193.199.22","xxuser","welcome1","sampledb");
if(mysqli_connect_error())
{
echo "error";
}
else
{
echo "Connect";
}

?>
