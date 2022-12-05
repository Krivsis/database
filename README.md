# database
資料庫放在資料裡
<br />
有資料的是databaseVer開頭的檔案
<br />
如果是要直接使用到Xampp，就把裡面的code直接貼到MySql指令裡
<br />
如果要純欄位沒資料===>資料庫基底
<br />
要純資料的就直接找相對應的csv直接匯入進資料庫

/---------
記得設定流水號
ALTER TABLE `資料表` CHANGE `流水號欄位` `流水號欄位` INT( 數字起始點 ) NOT NULL AUTO_INCREMENT;
