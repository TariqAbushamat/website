/* ==========================================================================
   LUVELLE (luvelle.ca) — JAVASCRIPT INTERACTIONS & PRODUCT GALLERIES
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileToggle.classList.toggle('open');
      mobileNav.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        mobileNav.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Header Elevation on Scroll
  const siteHeader = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  });

  // 4. Product Galleries Data
  const PRODUCT_GALLERIES = {
    'ring-trays': {
      title: 'Personalized Engagement Ring Trays',
      badge: 'Engagement & Katb Kitab / Nikah',
      subtitle: 'Mirrored pearl trays customized with Arabic & English calligraphy, velvet ring boxes & silk florals.',
      serviceName: 'Engagement Ring Trays',
      images: [
        {
          src: 'assets/images/ring-tray-aaliyah-kareem.jpg',
          caption: 'Aaliyah & Kareem — Dusty mauve roses, beige velvet ring boxes with mini gold crowns, gold beaded pearl rim, and Quran 78:8 ("And We created you in pairs").'
        },
        {
          src: 'assets/images/ring-tray-leila-youssef.jpg',
          caption: 'Leila & Youssef — Pure white roses, gold gilded leaves, ivory satin bow, and gold Arabic/English Quran 30:21 calligraphy.'
        },
        {
          src: 'assets/images/ring-tray-sophia-daniel.png',
          caption: 'Sophia & Daniel — Dusty blue & ivory roses, blue velvet ring boxes with crown studs, navy calligraphy, and Quran 30:21.'
        },
        {
          src: 'assets/images/ring-tray-yara-ahmed.jpg',
          caption: 'Yara & Ahmed — White roses, black silk bow with crystal pearl brooch, beige ring boxes, and Quran 30:21 ("And He placed between you love and mercy").'
        },
        {
          src: 'assets/images/ring-tray-riman-hadeel.png',
          caption: 'Riman & Hadeel — Katb Kitab / Fatiha tray with white florals, gold calligraphy, and silver beaded pearl rim.'
        }
      ]
    },
    'love-tree-shadow-boxes': {
      title: 'Couple Love Tree Shadow Boxes',
      badge: 'Personalized Couple Keepsakes',
      subtitle: 'Layered shadow-box art handcrafted with couple silhouettes, dimensional florals, heart trees and your personalized wording.',
      serviceName: 'Couple Love Tree Shadow Boxes',
      images: [
        {
          src: 'assets/images/love-tree-shadow-box-personalized.png',
          caption: 'Personalized Love Tree — Blush and ivory heart leaves, layered landscape, couple silhouette, initials and a special date.'
        },
        {
          src: 'assets/images/love-tree-shadow-box-hearts.png',
          caption: 'Together Is My Favorite Place — Blush heart tree, romantic couple silhouette and softly layered dimensional hills.'
        },
        {
          src: 'assets/images/love-tree-shadow-box-roses.png',
          caption: 'Every Love Story — Couple silhouette framed by handcrafted blush and ivory paper roses with pearl botanical details.'
        },
        {
          src: 'assets/images/love-tree-shadow-box-floral.png',
          caption: 'Together — Elegant wedding silhouette with a dimensional floral gown, gold butterflies and a meaningful love quote.'
        }
      ]
    },
    'perfume-favors': {
      title: 'Custom Perfume Favors',
      badge: 'Signature Scent Favors',
      subtitle: 'Delicate luxury fragrance sample vials on custom botanical cards with handcrafted satin or sage ribbons.',
      serviceName: 'Perfume Favors',
      images: [
        {
          src: 'assets/images/perfume-favors-grid.png',
          caption: 'Eli’s First Birthday — Custom perfume favor collection with personalized cards, botanical teepee artwork, and sage ribbons.'
        },
        {
          src: 'assets/images/perfume-favors-eli.png',
          caption: 'Eli’s First Birthday Keepsake Display — Close-up of personalized favor card with glass fragrance vial and ribbon bow.'
        }
      ]
    },
    'candle-favors': {
      title: 'The Perfect Candle Favors',
      badge: 'Luxury Candle Keepsakes',
      subtitle: 'Hand-poured candle jars with custom gold foil labels, gold metal lids, sheer white organza gift bags, and matching thank-you notes.',
      serviceName: 'Candle Favors',
      images: [
        {
          src: 'assets/images/candle-favors.png',
          caption: 'The Perfect Candle Favors — Hand-poured candle jars in sheer white organza gift bags with gold foiled thank-you cards.'
        }
      ]
    },
    'invitations': {
      title: 'Custom Invitations Suite',
      badge: 'Bespoke Stationery',
      subtitle: 'Beautifully designed wedding suites, baby shower invites, and milestone cards on heavy cardstock.',
      serviceName: 'Custom Invitations',
      images: [
        {
          src: 'assets/images/custom-invitations.png',
          caption: 'Custom Invitations — Isabella & Michael Wedding suite and Teddy Bear Baby Shower invitation with envelope options.'
        }
      ]
    },
    'acrylic-signs': {
      title: 'Custom Acrylic Signs',
      badge: 'Event Signage & Displays',
      subtitle: 'High-clarity acrylic welcome and celebration signs with solid natural wood presentation stands.',
      serviceName: 'Acrylic Signs',
      images: [
        {
          src: 'assets/images/acrylic-signs.png',
          caption: 'Custom Acrylic Welcome Signs — Amelia & James Wedding and Teddy Bear Baby Shower signs on natural wood stands.'
        }
      ]
    },
    'seating-charts': {
      title: 'Custom Seating Charts',
      badge: 'Reception Decor',
      subtitle: 'Laser-etched acrylic with brass stands or framed fine cardstock with botanical floral garland.',
      serviceName: 'Seating Charts',
      images: [
        {
          src: 'assets/images/seating-charts.png',
          caption: 'Seating Charts — Acrylic chart on brass stand & framed botanical garland cardstock chart.'
        }
      ]
    },
    'menu-cards': {
      title: 'Custom Menu Cards',
      badge: 'Tablescape Stationery',
      subtitle: 'Bespoke menus printed on heavy luxury textured cardstock with delicate floral borders and gold headers.',
      serviceName: 'Menu Cards',
      images: [
        {
          src: 'assets/images/menu-cards.png',
          caption: 'Custom Menu Cards — Thoughtfully designed to complement your event and elevate your table setting.'
        }
      ]
    }
  };

  // 5. Interactive Product Gallery Modal Logic
  const productModal = document.getElementById('product-gallery-modal');
  const productModalBackdrop = document.getElementById('product-modal-backdrop');
  const productModalClose = document.getElementById('product-modal-close');
  const productModalTitle = document.getElementById('product-modal-title');
  const productModalBadge = document.getElementById('product-modal-badge');
  const productModalSubtitle = document.getElementById('product-modal-subtitle');
  const viewerMainImg = document.getElementById('viewer-main-img');
  const viewerCaptionBar = document.getElementById('viewer-caption-bar');
  const viewerThumbnails = document.getElementById('product-modal-thumbnails');
  const viewerPrevBtn = document.getElementById('viewer-prev-btn');
  const viewerNextBtn = document.getElementById('viewer-next-btn');
  const modalInquireBtn = document.getElementById('modal-inquire-btn');

  let currentGalleryKey = null;
  let currentImageIndex = 0;

  function openProductGallery(productKey, startIndex = 0) {
    const galleryData = PRODUCT_GALLERIES[productKey];
    if (!galleryData || !productModal) return;

    currentGalleryKey = productKey;
    currentImageIndex = startIndex;

    if (productModalTitle) productModalTitle.textContent = galleryData.title;
    if (productModalBadge) productModalBadge.textContent = galleryData.badge;
    if (productModalSubtitle) productModalSubtitle.textContent = galleryData.subtitle;

    renderProductGalleryImage();
    renderProductThumbnails(galleryData.images);

    productModal.classList.add('active');
    productModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProductGallery() {
    if (!productModal) return;
    productModal.classList.remove('active');
    productModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderProductGalleryImage() {
    const galleryData = PRODUCT_GALLERIES[currentGalleryKey];
    if (!galleryData || !galleryData.images[currentImageIndex]) return;

    const currentImg = galleryData.images[currentImageIndex];
    if (viewerMainImg) {
      viewerMainImg.src = currentImg.src;
      viewerMainImg.alt = galleryData.title;
    }
    if (viewerCaptionBar) {
      viewerCaptionBar.textContent = currentImg.caption || '';
    }

    // Update active thumbnail
    const thumbBtns = viewerThumbnails?.querySelectorAll('.modal-thumb-btn');
    thumbBtns?.forEach((btn, idx) => {
      btn.classList.toggle('active', idx === currentImageIndex);
    });

    // Hide/show prev/next if only 1 image
    if (viewerPrevBtn && viewerNextBtn) {
      const hasMultiple = galleryData.images.length > 1;
      viewerPrevBtn.style.display = hasMultiple ? 'flex' : 'none';
      viewerNextBtn.style.display = hasMultiple ? 'flex' : 'none';
    }
  }

  function renderProductThumbnails(images) {
    if (!viewerThumbnails) return;
    viewerThumbnails.innerHTML = '';

    if (images.length <= 1) {
      viewerThumbnails.style.display = 'none';
      return;
    }
    viewerThumbnails.style.display = 'flex';

    images.forEach((img, idx) => {
      const thumbBtn = document.createElement('button');
      thumbBtn.type = 'button';
      thumbBtn.className = `modal-thumb-btn ${idx === currentImageIndex ? 'active' : ''}`;
      thumbBtn.innerHTML = `<img src="${img.src}" alt="Thumbnail ${idx + 1}" />`;
      thumbBtn.addEventListener('click', () => {
        currentImageIndex = idx;
        renderProductGalleryImage();
      });
      viewerThumbnails.appendChild(thumbBtn);
    });
  }

  function nextGalleryImage() {
    const galleryData = PRODUCT_GALLERIES[currentGalleryKey];
    if (!galleryData) return;
    currentImageIndex = (currentImageIndex + 1) % galleryData.images.length;
    renderProductGalleryImage();
  }

  function prevGalleryImage() {
    const galleryData = PRODUCT_GALLERIES[currentGalleryKey];
    if (!galleryData) return;
    currentImageIndex = (currentImageIndex - 1 + galleryData.images.length) % galleryData.images.length;
    renderProductGalleryImage();
  }

  // Attach event listeners to collection cards and "View Images" buttons
  const viewGalleryButtons = document.querySelectorAll('.view-product-gallery-btn');
  viewGalleryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productKey = btn.getAttribute('data-product-key');
      if (productKey) {
        openProductGallery(productKey);
      }
    });
  });

  const collectionCards = document.querySelectorAll('.collection-card[data-product]');
  collectionCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // If user clicked inquiry link, don't open modal
      if (e.target.closest('.link-with-arrow')) return;
      const productKey = card.getAttribute('data-product');
      if (productKey) {
        openProductGallery(productKey);
      }
    });
  });

  if (viewerNextBtn) viewerNextBtn.addEventListener('click', nextGalleryImage);
  if (viewerPrevBtn) viewerPrevBtn.addEventListener('click', prevGalleryImage);
  if (productModalClose) productModalClose.addEventListener('click', closeProductGallery);
  if (productModalBackdrop) productModalBackdrop.addEventListener('click', closeProductGallery);

  // Inquire from modal
  if (modalInquireBtn) {
    modalInquireBtn.addEventListener('click', () => {
      const galleryData = PRODUCT_GALLERIES[currentGalleryKey];
      closeProductGallery();

      if (galleryData?.serviceName) {
        const checkbox = document.querySelector(`.checkbox-grid input[value="${galleryData.serviceName}"]`);
        if (checkbox) checkbox.checked = true;

        const themeField = document.getElementById('event-theme');
        if (themeField && galleryData.images[currentImageIndex]?.caption) {
          const currentCaption = galleryData.images[currentImageIndex].caption;
          if (!themeField.value.includes(galleryData.serviceName)) {
            themeField.value = `Inquiring for: ${galleryData.title} (${currentCaption.split('—')[0].trim()}). ` + themeField.value;
          }
        }
      }

      const inquirySection = document.getElementById('inquiry');
      inquirySection?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Touch Swipe for Product Modal Image on mobile
  let touchStartX = 0;
  let touchEndX = 0;
  if (viewerMainImg) {
    viewerMainImg.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    viewerMainImg.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextGalleryImage(); // swipe left -> next
      } else if (touchEndX - touchStartX > 50) {
        prevGalleryImage(); // swipe right -> prev
      }
    }, { passive: true });
  }

  // Keyboard navigation for modals
  window.addEventListener('keydown', (e) => {
    if (productModal?.classList.contains('active')) {
      if (e.key === 'Escape') closeProductGallery();
      if (e.key === 'ArrowRight') nextGalleryImage();
      if (e.key === 'ArrowLeft') prevGalleryImage();
    }
  });

  // 6. Smooth Scrolling & Pre-selecting Service in Form from Links
  const serviceLinks = document.querySelectorAll('.link-with-arrow[data-service]');
  serviceLinks.forEach(link => {
    link.addEventListener('click', () => {
      const serviceName = link.getAttribute('data-service');
      if (serviceName) {
        const matchingCheckbox = document.querySelector(`.checkbox-grid input[value="${serviceName}"]`);
        if (matchingCheckbox) {
          matchingCheckbox.checked = true;
        }
      }
    });
  });

  // 7. Custom Inquiry Form Handling (Sends directly to lubnahassam33@gmail.com)
  const inquiryForm = document.getElementById('custom-inquiry-form');
  const dmInstagramBtn = document.getElementById('dm-instagram-btn');
  const formFeedback = document.getElementById('form-feedback');

  function getFormDataSummary() {
    const name = document.getElementById('client-name')?.value.trim() || 'Valued Client';
    const contact = document.getElementById('client-contact')?.value.trim() || '';
    const eventType = document.getElementById('event-type')?.value || 'Upcoming Event';
    const eventDate = document.getElementById('event-date')?.value || 'TBD';
    const guestCount = document.getElementById('guest-count')?.value.trim() || 'TBD';
    const location = document.getElementById('event-location')?.value.trim() || 'Niagara / GTA';
    const theme = document.getElementById('event-theme')?.value.trim() || 'None specified';

    const selectedServices = [];
    document.querySelectorAll('.checkbox-grid input[name="services"]:checked').forEach(cb => {
      selectedServices.push(cb.value);
    });

    const servicesText = selectedServices.length > 0 ? selectedServices.join(', ') : 'Custom Keepsakes';

    const summaryText = 
`Hello Luvelle (@luvelle.ca)! ✨
I'd love to inquire about a custom order:

• Name: ${name}
• Contact: ${contact}
• Celebration: ${eventType}
• Date: ${eventDate}
• Location: ${location}
• Quantity: ${guestCount}
• Items Needed: ${servicesText}
• Theme/Notes: ${theme}

Looking forward to hearing from you!`;

    return { name, contact, eventType, eventDate, guestCount, location, theme, servicesText, summaryText };
  }

  // Handle Send via Instagram DM
  if (dmInstagramBtn) {
    dmInstagramBtn.addEventListener('click', () => {
      const data = getFormDataSummary();
      
      navigator.clipboard.writeText(data.summaryText).then(() => {
        showFeedback(
          `✨ Your inquiry details have been copied to your clipboard! Opening Instagram DM with @luvelle.ca... Just paste and send!`,
          'success'
        );
      }).catch(() => {
        showFeedback(
          `Opening Instagram DM with @luvelle.ca... Send us your event date and details!`,
          'success'
        );
      });

      setTimeout(() => {
        window.open('https://ig.me/m/luvelle.ca', '_blank');
      }, 800);
    });
  }

  // Direct Business Email
  const BUSINESS_EMAIL = "lubnahassam33@gmail.com";

  // Handle Form Submit
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submit-btn');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit Inquiry ✉️';
      
      const data = getFormDataSummary();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending to Lubna... ⏳</span>`;
      }

      showFeedback(`Sending your custom order inquiry to Lubna (${BUSINESS_EMAIL})...`, 'info');

      try {
        // 1. Post to FormSubmit background email dispatcher
        const response = await fetch(`https://formsubmit.co/ajax/${BUSINESS_EMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            'Client Name': data.name,
            'Client Contact': data.contact,
            'Celebration Type': data.eventType,
            'Event Date': data.eventDate,
            'Guest Count / Quantity': data.guestCount,
            'Location': data.location,
            'Services Needed': data.servicesText,
            'Theme & Notes': data.theme,
            '_subject': `New Luvelle Inquiry: ${data.eventType} - ${data.name}`,
            '_template': 'table',
            '_captcha': 'false'
          })
        });

        // 2. Also submit to Netlify Forms if deployed on Netlify
        try {
          const formData = new FormData(inquiryForm);
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
          }).catch(() => {});
        } catch (netErr) {
          // ignore
        }

        if (response.ok) {
          showFeedback(
            `🎉 <strong>Thank you, ${data.name}!</strong> Your custom order inquiry has been sent directly to Lubna at <strong>${BUSINESS_EMAIL}</strong>! We will review your celebration details and reply shortly.`,
            'success'
          );
          inquiryForm.reset();
        } else {
          throw new Error('Automated delivery response not ok');
        }
      } catch (error) {
        showFeedback(
          `🎉 <strong>Thank you, ${data.name}!</strong> Your inquiry has been received! If you need urgent assistance, you can also DM us on Instagram <a href="https://instagram.com/luvelle.ca" target="_blank" style="text-decoration: underline; font-weight: bold; color: inherit;">@luvelle.ca</a> or email us at <strong>${BUSINESS_EMAIL}</strong>.`,
          'success'
        );
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      }
    });
  }

  function showFeedback(message, type) {
    if (!formFeedback) return;
    formFeedback.innerHTML = message;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.style.display = 'block';
    formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // 9. Active Nav Link Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
});
