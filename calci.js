 function displynum(n1)
        {
            if(calci.input_num.value==0)
                {
                    calci.input_num.value='';
                }
            calci.input_num.value=calci.input_num.value+n1;
        }
        function clear_all()
        {
            calci.input_num.value=0;
        }
        function setzero()
        {
          calci.input_num.value=0;  
        }
        function back()
        {
            calci.input_num.value=calci.input_num.value.substr(0,calci.input_num.value.length-1);
            if (calci.input_num.value=='')
                {
                    calci.input_num.value=0;
                }
        }