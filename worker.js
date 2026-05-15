addEventListener('message', function({ data }) {
    // {id: someid, pk: primKey, main: dataTableService.methods.mainData, curr: dataTableService.methods.currFilData}
    if(data.pk || data.main){
        let i = 0
        let map = {}
        let sendBack = { id: data.id, map: {} }
        const clen = data.curr.length
        const findObjIndxInData = function(item) {
          try{
              if(data.pk)
                return data.main.indexOf( data.main.find( function(d) { return d[data.pk] === item[data.pk] }) )
              let i = 0; let eq = 0;
              const propLen = Object.keys(item).length
              const len = data.main?.length
              for(i; i < len; i++){
                  eq = 0
                  const mD = data.main[i]
                  for(const prop in item){
                      if(item[prop] === mD[prop])
                          eq += 1
                      if(eq === propLen)//they all equal
                          return i
                  }
              }
              return -1
          } catch(e) { return -1 }
      }
      const incr = 5000
      const withUpdates = clen > incr
      for(i; i < clen; i++){
        const item = data.curr[i]
        const index = findObjIndxInData(item)
        if(index > -1)
            map[i] = index
        if(withUpdates && (i%incr === 0)){
            sendBack.map = {...map}
            postMessage(sendBack);
        }
      }
      sendBack.map = {...map}
      postMessage(sendBack);
    }
});
