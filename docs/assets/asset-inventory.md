# Home Asset Inventory

## Review summary

The website source review covers the original 22 PNG library plus the separately supplied `parking-lot.jpg`. No hidden source files, SVGs, brand guides, font files, command-center visuals, favicons, or social-sharing assets were found. No duplicate source hashes were found. Equipment-cleanup review artifacts under `equipment/unbranded/` are not website assets and remain excluded pending visual approval.

Three files are rendered in the working Home review: the parking-lot photograph and the only supplied logo file for each operating company. The AutoPay machine is retained in the repository as deferred supporting equipment and is no longer rendered. Source-library presence does not replace final publication approval. No group logo was found, so the text-based Pro Parking Group identity remains.

## Source assets and decisions

| Source path | Raster details | Apparent subject | Decision and intended use | Repository destination | Reason and approval dependency |
| --- | --- | --- | --- | --- | --- |
| `equipment/std-all-in-one-entrance-exit-manager.png` | PNG, 800 x 500, 60.3 KB, landscape, opaque | Branded entrance or exit terminal | Deferred | None | Relevant equipment, but the visible vendor mark and publication rights require confirmation. |
| `equipment/std-anpr-camera.png` | PNG, 800 x 713, 21.7 KB, landscape, opaque | License-plate-recognition camera | Deferred | None | Relevant equipment, but resolution, provenance, and publication rights are not established. |
| `equipment/std-autopay-machine-front.png` | PNG, 1122 x 1402, 1.41 MB, portrait, opaque | Automated parking payment machine | Deferred supporting equipment; not rendered | `src/assets/images/autopay-machine.png` | Retained for a possible proportionate below-the-fold use under Cashierless Parking and Digital Payments or Parking Systems and Equipment. Confirm product-image publication rights before any future use. |
| `equipment/std-barrier-gate-red.png` | PNG, 1448 x 1086, 830.2 KB, landscape, opaque | Red barrier gate with visible vendor branding | Deferred | None | Relevant equipment, but the prominent vendor mark and publication rights require confirmation. |
| `industries/std-industry-airport-parking.png` | PNG, 1536 x 1024, 2.51 MB, landscape, opaque | Airport parking illustration | Excluded from Home | None | Generic property context with no verified project relationship or publication provenance. |
| `industries/std-industry-event-venue-parking.png` | PNG, 502 x 432, 338.8 KB, landscape, opaque | Event-venue parking illustration | Excluded from Home | None | Generic property scene could imply unverified experience. |
| `industries/std-industry-hospital-parking.png` | PNG, 374 x 432, 265.9 KB, portrait, opaque | Hospital parking illustration | Excluded from Home | None | Generic, low-resolution property scene with no verified project relationship. |
| `industries/std-industry-mall-parking.png` | PNG, 374 x 432, 234.4 KB, portrait, opaque | Shopping-mall parking illustration | Excluded from Home | None | Generic, low-resolution property scene with no verified project relationship. |
| `industries/std-industry-office-parking.png` | PNG, 374 x 432, 277.6 KB, portrait, opaque | Office entrance parking illustration | Excluded from Home | None | Generic, low-resolution property scene with no verified project relationship. |
| `industries/std-industry-open-lot-parking.png` | PNG, 502 x 432, 330.1 KB, landscape, opaque | Open parking lot illustration | Excluded from Home | None | Generic property context with no publication provenance. |
| `industries/std-industry-residential-condo-parking.png` | PNG, 352 x 432, 250.1 KB, portrait, opaque | Residential visitor parking illustration | Excluded from Home | None | Generic, low-resolution property scene with no verified project relationship. |
| `industries/std-industry-street-parking.png` | PNG, 1086 x 1024, 2.00 MB, landscape, opaque | On-street parking scene | Excluded from Home | None | Generic scene, not one of the approved Home property categories, with no publication provenance. |
| `industries/std-industry-transport-hub-parking.png` | PNG, 834 x 811, 1.18 MB, landscape, opaque | Bus-terminal parking illustration | Excluded from Home | None | Generic property context could imply unverified operating experience. |
| `industries/std-industry_hotel-guests-parking.png` | PNG, 834 x 811, 1.18 MB, landscape, opaque | Hotel guest-parking illustration | Excluded from Home | None | Generic property context could imply unverified operating experience. |
| `logos/exitpass-logo.png` | PNG, 480 x 128, 6.1 KB, landscape, transparent | ExitPass wordmark | Deferred | None | Approved public positioning and content context for ExitPass are not yet available. |
| `logos/Park-Secure-Management-Corporation-logo.png` | PNG, 1600 x 1423, 126.9 KB, landscape, transparent | Park Secure company mark | Selected for company card | `src/assets/brand/park-secure-logo.png` | Only supplied Park Secure variant and clearly associated with the company. Confirm final publication and usage guidance. |
| `logos/Professional-Parking-Management-Corporation-logo.png` | PNG, 1600 x 796, 52.8 KB, landscape, transparent | Pro-P company mark | Selected for company card | `src/assets/brand/pro-p-logo.png` | Only supplied Pro-P variant and clearly associated with the company. Confirm final publication and usage guidance. |
| `payment-methods/cards-visa-mastercard.png` | PNG, 1200 x 400, 220.4 KB, landscape, transparent | Visa and Mastercard marks | Excluded from Home | None | No payment workflow is implemented and third-party brand-use approval is not established. |
| `payment-methods/cash.png` | PNG, 256 x 256, 2.0 KB, square, transparent | Cash icon | Excluded from Home | None | Low-resolution icon is unnecessary for the current editorial presentation. |
| `payment-methods/gcash.png` | PNG, 512 x 512, 110.5 KB, square, transparent | GCash application icon | Excluded from Home | None | Low visual quality and third-party brand-use approval is not established. |
| `payment-methods/maya.png` | PNG, 512 x 512, 49.5 KB, square, transparent | Maya application icon | Excluded from Home | None | Low visual quality and third-party brand-use approval is not established. |
| `payment-methods/qrph.png` | PNG, 1200 x 400, 87.1 KB, landscape, transparent | QR Ph mark | Excluded from Home | None | No payment workflow is implemented and brand-use approval is not established. |
| `parking-lot/parking-lot.jpg` | JPEG, 960 x 720, 63.2 KB, landscape, opaque | Underground parking entrance and exit lanes with barriers, terminals, vehicles, and site personnel | Selected for Hero | `src/assets/images/parking-lot.jpg` | Represents the broader managed parking environment without presenting one product as the group identity. Confirm publication rights and depicted-site approval before production. |

## Missing and deferred guidance

- No Pro Parking Group logo or wordmark was found. The current text identity remains.
- No brand guide or approved color specification was found. Existing neutral design tokens remain unchanged.
- No font files or licensing evidence were found. The system-font stack remains.
- The prepared visuals named `01` through `07` were not present. The separately supplied parking-lot photograph now provides the broader Hero context.
- No client or property logo was found or selected. The public portfolio remains hidden.
- Logo clear-space, minimum-size, color-variant, and favicon guidance still require a brand decision.
