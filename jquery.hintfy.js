/***********************************************************************
 * Jquery Hintfy v1.0.0
 * @author joaomassan@gmail.com
 * @version Jan 29th, 2014
 */
(function( $ ) {
    
    /* CSS class for hint text */
    var _hintClass = "hint";
    
    /**
     * Focus event listener
     * @param evt
     */
    function _focus(evt) {
        var value = $(this).val();
        if(value) {
            if(value == $(this).attr(_hintClass)) {
                $(this).val("");       
            }
        }
        $(this).removeClass(_hintClass);
    }

    /**
     * Blur event listener
     * @param evt
     */
    function _blur(evt) {
        var value = $(this).val();    
        if(!value) {
            $(this).val($(this).attr(_hintClass));
            $(this).addClass(_hintClass);
        }
    } 
    
    /**
     * Sets plugin configuration from config JSON param
     * @param config JSON
     */
    // TODO: improve
    function _loadConfig(config) {
        if(config) {        
            if(config.css) {
                if(config.css.hintClass) {
                    hintClass = config.css.hintClass;
                }    
            }
        }
    }
    
    /** 
     * Main function
     * @param config JSON
     */
    $.fn.hintfy = function(config) { 
        _loadConfig(config);
        $(this).focus(_focus).blur(_blur);  
        $(this).trigger("blur");
    }
} (jQuery));
