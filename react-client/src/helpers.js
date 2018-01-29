module.exports = {
    

    redesign : (array) => {
        console.log('redesigned invoked')
        let redesignedObj = {}
        let name;

        
        for (var i = 0; i < array.length; i++) {
            let obj = array[i];
            name = obj.name;


            for (var j = 0; j < name.length; j++) {
                let char = name[j];
                if (char === ',') {
                    name = name.slice(0, j);
            
                }
            }
        
            redesignedObj[name] = obj.value
        }
        console.log(redesignedObj)
        return redesignedObj;
    }
}