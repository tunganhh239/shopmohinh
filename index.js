readlineSync = require('readline-sync');
var fs = require('fs');



function VirusTotalLink(){

	// Tao regex de kiem tra duong dan dau vao

	

	
	var pathVT  = readlineSync.question('Duong dan den file Json trong thu muc VT_analysis :');


	var VT_link = fs.readFileSync(pathVT, {encoding: 'utf-8'});
	var VT_link_json = JSON.parse(VT_link);

	// hien thi permalink sau khi tach ra khoi json
	console.log("\n Permalink : " + VT_link_json.permalink + "\n");

}

function Features_files(){

	

	
		var Features_files_path = readlineSync.question('Duong dan den file Json trong thu muc Features_files :');


	var output_info = fs.readFileSync(Features_files_path, {encoding: 'utf-8'});
	var opcode_info = JSON.parse(output_info);

	var maxOpcode = { valueMax : 0, valueMin : 1, nameMax : '', nameMin : '', sumOfOpcode : 0 };

	for (x in opcode_info.Static_analysis.Opcodes) {

    	if(maxOpcode.valueMax < opcode_info.Static_analysis.Opcodes[x]){
    		maxOpcode.valueMax = opcode_info.Static_analysis.Opcodes[x];
    		maxOpcode.nameMax = x;
    	}
    	if(opcode_info.Static_analysis.Opcodes[x] <= maxOpcode.valueMin){
    		maxOpcode.valueMin = opcode_info.Static_analysis.Opcodes[x];
    		maxOpcode.nameMin = x;
    	}

    	// maxOpcode.sumOfOpcode += opcode_info.Static_analysis.Opcodes[x];
    	// console.log(opcode_info.Static_analysis.API calls[x]);
			maxOpcode.sumOfOpcode ++;
}
	var  Api_call_temp = { valueMax : 0, valueMin : 1, nameMax : '', nameMin : '', sumOfAPICalls : 0 };

	var API_Calls = {};
	var Strings = {};
	for (x in opcode_info.Static_analysis) {

    	if(x == "API calls"){
    		API_Calls = opcode_info.Static_analysis[x];
    	}

    	if(x == "Strings"){
    		Strings = opcode_info.Static_analysis[x];
    	}
	}
	for (x in API_Calls) {

    	if(Api_call_temp.valueMax < API_Calls[x]){
    		Api_call_temp.valueMax = API_Calls[x];
    		Api_call_temp.nameMax = x;
    	}
    	if(API_Calls[x] <= Api_call_temp.valueMin){
    		Api_call_temp.valueMin = API_Calls[x];
    		Api_call_temp.nameMin = x;
    	}
    	Api_call_temp.sumOfAPICalls ++;
    	// console.log(opcode_info.Static_analysis.API calls[x]);

	}

	var  Strings_temp = {
		valueMax : 0,
		nameMax : ''
	}

	for (x in Strings) {

    	if(x.length > Strings_temp.valueMax){
    		Strings_temp.valueMax = x.length;
    		Strings_temp.nameMax = x;
    	}

	}
	console.log("\n + Ten cua ung dung da duoc phan tich : " + opcode_info.Pre_static_analysis.md5 + ".apk");
	console.log("\n + Op-code xuat hien nhieu nhat : " + maxOpcode.nameMax + ", So lan xuat hien : " + maxOpcode.valueMax);
	console.log("\n + Op-code xuat hien it nhat : " + maxOpcode.nameMin);
	console.log("\n + Tong so op-code quan sat duoc : " + maxOpcode.sumOfOpcode);

	console.log("\n + API Call duoc goi nhieu nhat : " + Api_call_temp.nameMax + ", So lan xuat hien : " + Api_call_temp.valueMax);
	console.log("\n + API Call duoc goi it nhat : " + Api_call_temp.nameMin);
	console.log("\n + Tong so API Calls quan sat duoc : " + Api_call_temp.sumOfAPICalls);

	console.log("\n + Chuoi ki tu dai nhat trong doan ma : " + Strings_temp.nameMax);
}




VirusTotalLink();

Features_files();