axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization={"Your Authorization"}&format=JSON&locationName=%E9%AB%98%E9%9B%84%E5%B8%82&sort=time')
    .then(function(response) {

        // 地區
        document.getElementById("cwb_location").innerHTML = response.data.records.location[0].locationName;
        // API 項目
        document.getElementById("cwb_title").innerHTML = response.data.records.datasetDescription;
        
        // 預報開始時間
        let startTime = response.data.records.location[0].weatherElement[0].time[0].startTime;
        document.getElementById("startTime").innerHTML = startTime;

        // 預報結束時間
        let endTime = response.data.records.location[0].weatherElement[0].time[0].endTime;
        document.getElementById("endTime").innerHTML = endTime;

        // 天氣現象 API:
        let Wx = response.data.records.location[0].weatherElement[0].time[0].parameter;
        document.getElementById("Wx").innerHTML = Wx.parameterName + " " + Wx.parameterValue;

        // 最高溫度 API:
        let MaxT = response.data.records.location[0].weatherElement[4].time[0].parameter;
        document.getElementById("MaxT").innerHTML = MaxT.parameterName + " " + MaxT.parameterUnit;
        
        // 最低溫度 API:
        let MinT = response.data.records.location[0].weatherElement[2].time[0].parameter;
        document.getElementById("MinT").innerHTML = MinT.parameterName + " " + MinT.parameterUnit;

        // 舒適度 API:
        let CI = response.data.records.location[0].weatherElement[3].time[0].parameter;
        document.getElementById("CI").innerHTML = CI.parameterName;

        // 降雨機率 API:
        let PoP = response.data.records.location[0].weatherElement[1].time[0].parameter;
        document.getElementById("PoP").innerHTML = PoP.parameterName + " " + PoP.parameterUnit;
    })
    .catch(function(error) {
        console.log(error);
    });