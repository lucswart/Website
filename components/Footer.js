import React from "react";

export default function Footer() {
  const logo = require("../assets/logo1.png");
  return (
    <div class="block-41 py-5">
      <div class="container">
        <div class="row px-2">
          <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            <img class="block-41__logo mb-3" src={logo} />
            <p class="block-41__brand-story mb-0">
              Byte24 is de bestemming voor al uw benodigdheden op het gebied van
              app- en webdevelopment.
            </p>
          </div>
          <div class="col-md-3 col-lg-2 mb-sm-4 mb-lg-0">
            <ul class="block-41__links-list list-unstyled p-0">
              <li class="block-41__li-heading"></li>
              <li class="block-41__li">
                <a href="#!" class="block-41__li-link"></a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-lg-2 mb-sm-4 mb-lg-0">
            <ul class="block-41__links-list list-unstyled p-0">
              <li class="block-41__li-heading">Producten</li>
              <li class="block-41__li">
                <a href="#!" class="block-41__li-link">
                  Voorraadbeheer
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-lg-2 mb-sm-4 mb-lg-0">
            <ul class="block-41__links-list list-unstyled p-0">
              <li class="block-41__li-heading">Diensten</li>
              <li class="block-41__li">
                <a href="/diensten/websites" class="block-41__li-link">
                  Website
                </a>
              </li>
              <li class="block-41__li">
                <a href="/diensten/apps" class="block-41__li-link">
                  App
                </a>
              </li>
              <li class="block-41__li">
                <a href="/diensten/websites" class="block-41__li-link">
                  Webshop
                </a>
              </li>
              <li class="block-41__li">
                <a href="/diensten/design" class="block-41__li-link">
                  Design
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-lg-2 mb-sm-4 mb-lg-0">
            <ul class="block-41__links-list list-unstyled p-0">
              <li class="block-41__li-heading">Bedrijf</li>
              <li class="block-41__li">
                <a href="/overons" class="block-41__li-link">
                  Over ons
                </a>
              </li>
              <li class="block-41__li">
                <a href="/contact" class="block-41__li-link">
                  Contact
                </a>
              </li>
              <li class="block-41__li">
                <a href="/sitemap.xml" class="block-41__li-link">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="block-41__divider" />
      <div class="container">
        <div class="row px-2">
          <div class="flex-grow-1">
            <ul class="block-41__extra-links d-flex list-unstyled p-0">
              <li class="mx-2">
                <a
                  href="https://www.instagram.com/byte.24/"
                  class="block-41__extra-link m-0"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li class="mx-2">
                <a
                  href="mailto:info@byte24.nl"
                  class="block-41__extra-link m-0"
                >
                  <i class="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <p class="block-41__copyrights">
            © 2021 BYTE24. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
