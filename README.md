# passValidate.js v.1.0.0
jQuery library for validation password entry. So that users can see if their password is strong or not.
<p>developer 2022 Shaoransoft</p>
<h3>Requirements</h3>
<ul>
  <li>Bootstrap 4.6.0+ (Support Bootstrap 5)</li>
  <li>jQuery 1.7.1+</li>
</ul>
<h3>Usage</h3>
<p>Call the datepicker via javascript:</p>
<pre><code class="language-java">$('#password').passValidate({
    eTarget: $('#validate_display')
});</code></pre>
<h3>Configuration</h3>
<table>
  <thead>
    <tr>
      <th width="20%">Option</th>
      <th width="20%">Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>eTarget</td>
      <td>target element<br>Default: #validate_display</td>
      <td>Display validation in a minimalist style</td>
    </tr>
    <tr>
      <td>vUppercase</td>
      <td>true / false<br>Default: true</td>
      <td>Validate for entering uppercase characters</td>
    </tr>
    <tr>
      <td>vLowercase</td>
      <td>true / false<br><span class="text-primary">Default: true</span></td>
      <td>Validate for entering lowercase characters</td>
    </tr>
    <tr>
      <td>vNumeric</td>
      <td>true / false<br>Default: true</td>
      <td>Validate for entering numbers</td>
    </tr>
    <tr>
      <td>vLength</td>
      <td>true / false<br>Default: true</td>
      <td>Validate for character length</td>
    </tr>
    <tr>
      <td>lengthMin</td>
      <td>numeric<br>Default: 8</td>
      <td>Minimum character length</td>
    </tr>
  </tbody>
</table>
<hr>
