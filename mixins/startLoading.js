
import kursor from 'kursor'
    export default {
        mounted() {
            let percent = 0;
          const loading = this.$vs.loading({
            percent: percent
          })
          const interval = setInterval(() => {
            if (percent <= 100) {
              loading.changePercent(`${percent++}%`)
            }
          }, 40)
          setTimeout(() => {
            loading.close()
            clearInterval(interval)
            percent = 0
          }, 2000)


          new kursor({
            type:  Math.floor(Math.random() * Math.floor(4) + 1),
            removeDefaultCursor: true
            })

            
            
          }
        
      }
    