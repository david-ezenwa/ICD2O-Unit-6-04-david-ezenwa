// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get('radius')

  // process
  const volume = ((4 / 3) * Math.PI) * radius ** 3

  // output
  document.getElementById('radius').innerHTML = "The radius is: " + radius + ' mm'
  document.getElementById('volume').innerHTML = 'The volume is: ' + volume.toFixed(2) + ' mm³'
}

