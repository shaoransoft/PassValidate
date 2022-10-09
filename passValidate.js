/*!
PassValidate v.1.0.1

(c) 2022 Shaoransoft
*/

;(function(factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    }
    else if (typeof exports === 'object' && module.exports) {
		module.exports = function(root, jQuery) {
            if (jQuery === undefined) {
			    if (typeof window !== 'undefined') {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
			factory(jQuery);
            return jQuery;
		};
	}
	else {
        factory(jQuery);
    }

    $.fn.passValidate = function(options) {
        var _options = $.extend(true, {}, $.fn.passValidate.defaults, options);
        var _element = $(this);
        $.fn.passValidate.render(_options);
        _element.on({
            keyup: function() {
                $.fn.passValidate.validate(_options, _element.val());
                $.fn.passValidate.render(_options);
                options.callback.call(this, $.fn.passValidate.callback(_options));
            }
        });
        _options.callback.call(this, false);
    };

    $.fn.passValidate.defaults = {
        eTarget: $('#validate_display'),
        vUppercase: true,
        vLowercase: true,
        vNumeric: true,
        vSpecialChar: true,
        vLength: true,
        lengthMin: 8,
        callback: function() {}
    };

    $.fn.passValidate.validate = function(options, string) {
        if (typeof string != 'string')
            return;
        if (options.vUppercase === true) {
            _validate.uppercase = /[A-Z]/g.test(string);
        }
        if (options.vLowercase === true) {
            _validate.lowercase = /[a-z]/g.test(string);
        }
        if (options.vNumeric === true) {
            _validate.numeric = /[0-9]/g.test(string);
        }
        if (options.vSpecialChar === true) {
            _validate.specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g.test(string);
        }
        if (options.vLength === true) {
            _validate.length = string.length>=options.lengthMin;
        }
    };

    $.fn.passValidate.render = function(options) {
        var elementTarget = options.eTarget;
        if (elementTarget == undefined)
            return;
        if (options.vUppercase === true) {
            var eUppercase = elementTarget.find('[validate-form="uppercase"]');
            if (eUppercase.length == 0) {
                elementTarget.append('<span class="btn btn-'+(_validate.uppercase?'success':'light')+' btn-sm fw-bold" validate-form="uppercase" title="Enter capital letters">ABC</span> ');
            }
            else {
                if (_validate.uppercase) {
                    eUppercase.removeClass('btn-light').addClass('btn-success');
                }
                else {
                    eUppercase.removeClass('btn-success').addClass('btn-light');
                }
            }
        }
        if (options.vLowercase === true) {
            var eLowercase = elementTarget.find('[validate-form="lowercase"]');
            if (eLowercase.length == 0) {
                elementTarget.append('<span class="btn btn-'+(_validate.lowercase?'success':'light')+' btn-sm fw-bold" validate-form="lowercase" title="Enter lowercase letters">abc</span> ');
            }
            else {
                if (_validate.lowercase) {
                    eLowercase.removeClass('btn-light').addClass('btn-success');
                }
                else {
                    eLowercase.removeClass('btn-success').addClass('btn-light');
                }
            }
        }
        if (options.vNumeric === true) {
            var eNumeric = elementTarget.find('[validate-form="numeric"]');
            if (eNumeric.length == 0) {
                elementTarget.append('<span class="btn btn-'+(_validate.numeric?'success':'light')+' btn-sm fw-bold" validate-form="numeric" title="Enter number">123</span> ');
            }
            else {
                if (_validate.numeric) {
                    eNumeric.removeClass('btn-light').addClass('btn-success');
                }
                else {
                    eNumeric.removeClass('btn-success').addClass('btn-light');
                }
            }
        }
        if (options.vSpecialChar === true) {
            var eSpecialChar = elementTarget.find('[validate-form="specialChar"]');
            if (eSpecialChar.length == 0) {
                elementTarget.append('<span class="btn btn-'+(_validate.specialChar?'success':'light')+' btn-sm fw-bold" validate-form="specialChar" title="Enter special character">$@#</span> ');
            }
            else {
                if (_validate.specialChar) {
                    eSpecialChar.removeClass('btn-light').addClass('btn-success');
                }
                else {
                    eSpecialChar.removeClass('btn-success').addClass('btn-light');
                }
            }
        }
        if (options.vLength === true) {
            var eLength = elementTarget.find('[validate-form="length"]');
            if (eLength.length == 0) {
                elementTarget.append('<span class="btn btn-'+(_validate.length?'success':'light')+' btn-sm fw-bold" validate-form="length" title="Enter at least '+options.lengthMin+' characters">Length '+options.lengthMin+'+</span> ');
            }
            else {
                if (_validate.length) {
                    eLength.removeClass('btn-light').addClass('btn-success');
                }
                else {
                    eLength.removeClass('btn-success').addClass('btn-light');
                }
            }
        }
    }

    $.fn.passValidate.callback = function(options) {
        if (((options.vUppercase && _validate.uppercase) || !options.vUppercase) &&
            ((options.vLowercase && _validate.lowercase) || !options.vLowercase) &&
            ((options.vNumeric && _validate.numeric) || !options.vNumeric) &&
            ((options.vSpecialChar && _validate.specialChar) || !options.vSpecialChar) &&
            ((options.vLength && _validate.length) || !options.vLength)) {
            return true;
        }
        return false;
    }

    var _validate = {
        uppercase: false,
        lowercase: false,
        numeric: false,
        specialChar: false,
        length: false
    };
}(jQuery));