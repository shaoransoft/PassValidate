# passValidate.js v.1.0.5
jQuery library for validation password entry. So that users can see if their password is strong or not.
<p>developer 2022 Shaoransoft</p>
<a href="https://shaoransoft.github.io/PassValidate/demo.html" target="_blank">Demo</a>
<h3>Requirements</h3>
<ul>
  <li>jQuery 1.7.1+</li>
</ul>
<h3>Usage</h3>
<p>Call the datepicker via javascript:</p>
<pre><code>$('#password').passValidate({
    eTarget: $('#validate_display')
});</code></pre><br>
<p>Can get callback results from validation:</p>
<pre><code>$('#password').passValidate({
    callback: function(result) {
        console.log(result);    // return is true or false
    }
});</code></pre><br>
    <p>Full source code demo basic:</p>
<pre><code>&lt;form&gt;
    &lt;div id="validate_display"&gt;&lt;/div&gt;
    &lt;label for="password"&gt;Password&lt;/label&gt;
    &lt;input type="password" id="password" placeholder="Enter password"&gt;
    &lt;button type="submit" disabled&gt;Submit&lt;/button&gt;
&lt;/form&gt;
&lt;script&gt;
    $(document).ready(function() {
        $('#password').passValidate({
            eTarget: $('#validate_display'),
            callback: function(result) {
                if (result == true) {
                    $('button[type="submit"]').prop('disabled', false);
                }
                else {
                    $('button[type="submit"]').prop('disabled', true);
                }
            }
        });
    });
&lt;/script&gt;</code></pre>
<h3>Configuration</h3>
<h5>General</h5>
<table>
  <thead>
    <tr>
      <th width="20%">Option</th>
      <th width="25%">Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>eTarget</td>
      <td>target element<br>Default: #validate_display</td>
      <td>Display validation in a minimalist style.</td>
    </tr>
    <tr>
      <td>vUppercase</td>
      <td>true / false<br>Default: true</td>
      <td>Validate for entering uppercase characters.</td>
    </tr>
    <tr>
      <td>vLowercase</td>
      <td>true / false<br>Default: true</td>
      <td>Validate for entering lowercase characters.</td>
    </tr>
    <tr>
      <td>vNumeric</td>
      <td>true / false<br>Default: true</td>
      <td>Validate for entering numbers.</td>
    </tr>
    <tr>
      <td>vSpecialChar</td>
      <td>true / false<br>Default: true</td>
      <td>Validate for entering special character.</td>
    </tr>
    <tr>
      <td>specialChar</td>
      <td>string<br>Default: !@#$%^&*_+-.?</td>
      <td>Set special characters for validation.</td>
    </tr>
    <tr>
      <td>vLength</td>
      <td>true / false<br>Default: true</td>
      <td>Validate for character length.</td>
    </tr>
    <tr>
      <td>length</td>
      <td>numeric<br>Default: 8</td>
      <td>Minimum character length.</td>
    </tr>
    <tr>
      <td>language</td>
      <td>array</td>
      <td>Set display description for display.</td>
    </tr>
    <tr>
      <td>style</td>
      <td>array</td>
      <td>Set the style of the display elements validation.</td>
    </tr>
    <tr>
      <td>callback</td>
      <td></td>
      <td>Callback function results from validation is true or false.<br>Default: false</td>
    </tr>
  </tbody>
</table>
<h5>Language</h5>
<table>
  <thead>
    <tr>
      <th width="20%">Option</th>
      <th width="25%">Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>vUppercaseText</td>
      <td>string<br>Default: ABC</td>
      <td>Set display uppercase validation text.</td>
    </tr>
    <tr>
      <td>vUppercase</td>
      <td>string<br>Enter uppercase letters</td>
      <td>Set description uppercase validation in title attribute.</td>
    </tr>
    <tr>
      <td>vLowercaseText</td>
      <td>string<br>Default: abc</td>
      <td>Set display lowercase validation text.</td>
    </tr>
    <tr>
      <td>vLowercase</td>
      <td>string<br>Default: Enter lowercase letters</td>
      <td>Set description lowercase validation in title attribute.</td>
    </tr>
    <tr>
      <td>vNumericText</td>
      <td>string<br>Default: 123</td>
      <td>Set display numeric character validation text.</td>
    </tr>
    <tr>
      <td>vNumeric</td>
      <td>string<br>Default: Enter numeric</td>
      <td>Set description numeric character validation in title attribute.</td>
    </tr>
    <tr>
      <td>vSpecialCharText</td>
      <td>string<br>Default: $@#</td>
      <td>Set display special character validation text.<br>Can use <code>__SPECIAL_CHAR__</code> to display special characters set with option specialChar on the description.</td>
    </tr>
    <tr>
      <td>vSpecialChar</td>
      <td>string<br>Default: Enter special character</td>
      <td>Set description special character validation in title attribute.<br>Can use <code>__SPECIAL_CHAR__</code> to display special characters set with option specialChar on the description.</td>
    </tr>
    <tr>
      <td>vLengthText</td>
      <td>string<br>Default: Length <code>__LENGTH__</code>+</td>
      <td>Set display character length text.<br>Can use <code>__LENGTH__</code> to display minimum character length set with option length on the description.</td>
    </tr>
    <tr>
      <td>vLength</td>
      <td>string<br>Default: Enter at least <code>__LENGTH__</code> characters</td>
      <td>Set description character length in title attribute.<br>Can use <code>__LENGTH__</code> to display minimum character length set with option length on the description.</td>
    </tr>
  </tbody>
</table>
<h5>Style</h5>
<table>
  <thead>
    <tr>
      <th width="20%">Option</th>
      <th width="25%">Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>className</td>
      <td>string</td>
      <td>Set the style all element.</td>
    </tr>
    <tr>
      <td>isValid</td>
      <td>string</td>
      <td>Set the style element when validated to valid.</td>
    </tr>
    <tr>
      <td>isInvalid</td>
      <td>string</td>
      <td>Set the style element when validated to invalid.</td>
    </tr>
    <tr>
      <td>vUppercase</td>
      <td>string</td>
      <td>Set the style in uppercase validation element.</td>
    </tr>
    <tr>
      <td>vLowercase</td>
      <td>string</td>
      <td>Set the style in lowercase validation element.</td>
    </tr>
    <tr>
      <td>vNumeric</td>
      <td>string</td>
      <td>Set the style in numeric character validation element.</td>
    </tr>
    <tr>
      <td>vSpecialChar</td>
      <td>string</td>
      <td>Set the style in special character validation element.</td>
    </tr>
    <tr>
      <td>vLength</td>
      <td>string</td>
      <td>Set the style in character length validation element.</td>
    </tr>
  </tbody>
</table>
<h3>Global defaults</h3>
<p>If you need to set the default options for all instances of passValidate in your website. You can set default options by calling <code>$.extend(true, $.fn.passValidate.defaults, {});</code> For example:</p>
<pre><code>$.extend(true, $.fn.passValidate.defaults, {
    vUppercase: false,
    vLowercase: false
});</code></pre>
<h3>Methods</h3>
<h5>reload()</h5>
<p>If you do something to change the input field in addition to the PassValidate events. You can use <code>reload()</code> to refresh the validation again. For example:</p>
<pre><code>var passValidate = $('#password').passValidate({ ... });
passValidate.reload();</code></pre>
<h5>callback()</h5>
<p>You can use <code>callback()</code> to get the validation status. which the result will be true or false. For example:</p>
<pre><code>var passValidate = $('#password').passValidate({ ... });
passValidate.callback();</code></pre>
