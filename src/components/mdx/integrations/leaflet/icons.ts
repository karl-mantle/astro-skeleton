import L from "leaflet";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import icon from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

export function setupLeafletIcons(base = "/astro-skeleton/") {
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: `${base}${iconRetina.src}`,
    iconUrl: `${base}${icon.src}`,
    shadowUrl: `${base}${shadow.src}`,
  });
}
