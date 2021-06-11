# training_CWB_API
training Central Weather Bureau(CWB) API

1. 氣象局API使用說明
[API相關說明](https://opendata.cwb.gov.tw/devManual/insrtuction)

2. 氣象局註冊
[取得授權碼](https://opendata.cwb.gov.tw/userLogin)

3. 氣象局提供API
提供[氣象、氣候、海象、地震、天文API](https://opendata.cwb.gov.tw/dist/opendata-swagger.html)

4. 建立training_CWB_API資料夾(可用XAMPP執行代碼)

5. 在終端機輸入
```cmd
    npm install axios
```

6. 新增index.html、main.js檔案

7. 參考 index.html 檔案

8. 參考 main.js 檔案
將{"Your Authorization"} 更換成自己申請的授權碼
範例：https://opendata.cwb.gov.tw/historyapi/v1/getMetadata/O-A0059-001?Authorization=CWB-1234ABCD-78EF-GH90-12XY-IJKL12345678

9. Demo
![image](https://user-images.githubusercontent.com/85299566/121702515-895fd980-cb04-11eb-837e-d27039eff845.png)
