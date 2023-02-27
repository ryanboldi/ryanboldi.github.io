---
layout: page
permalink: /publications/
title: publications
description: Recent Publications
years: [2022, 2023]
nav: true
---

<div class="publications">
{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

<h1 class="under review">Under Review</h1>
{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f review -q @*[year={{y}}]* %}
{% endfor %}

</div>

