let num = 1
    let i = 1
    let _wlc = prompt('Enter Your Name')
    document.getElementById('hhh').innerHTML=_wlc
    function _txtEd() {
        textcontent.document.designMode = 'on'
    }

    function exCmd(e) {
        textcontent.document.execCommand(e, true, null)
    }

    function exCmdArg(e, arg) {
        textcontent.document.execCommand(e, true, arg)
    }

    function _toggle() {
        if (num % 2) {
            textcontent.document.designMode = 'off'

        } else {
            textcontent.document.designMode = 'on'

        }
        num++
    }