---
#preview
title: Laser-Positionierungs- und Objekterkennungssystem
image: /assets/project/details/laser-pointing-1.jpeg
category: Hardware
category_slug: Hardware
type: Robustes LoRaWAN-basiertes IoT-Gerät für intelligentes Parkmanagement, langanhaltende Batterielebensdauer, nahtlose mobile App-Konnektivität, effiziente STM32WL55 und MQTT-Datenübertragung
team: Steven Morrison
date: 2021-2023

#full details
details:
    items:
        - label: "Kunde:"
          value: Unser Produkt

        - label: "Start:"
          value: 18. Dez. 2022
        
        - label: "Ende:"
          value: 18. März 2023
        

gallery: 
    items:
        - image: /assets/project/details/laser-pointing-1.jpeg
          alt: "Bild"

        - image: /assets/project/details/laser-pointing-cover.jpeg
          alt: "Bild"


additional:
    heading: Projektergebnis
    content: "<ul><li>Integriert präzise Laser-Positionierung mit Echtzeit-Objekterkennung</li><li>Fernsteuerung über die Blynk-App</li><li>Ermöglicht Benutzern die Eingabe von Entfernungswerten und die präzise Anpassung der Laserwinkel</li><li>Berechnet Winkel mit einer Toleranz von ±20 Grad</li><li>PIR-Sensor erkennt zuverlässig Bewegung und löst entsprechende Aktionen aus</li><li>Stellt Echtzeit-Feedback und Kontrolle über die Blynk-App bereit</li><li>Beinhaltet selbst definierte Übungen und Drill-Programme für benutzerdefinierte Laserbewegungsmuster</li><li>Bleibt über längere Zeit stabil, um kontinuierlichen Betrieb zu gewährleisten</li><li>Gewährleistet die Sicherheit der Benutzer durch sichere Montage...</li></ul>"

---

### Beschreibung

Das Laser-Positionierungs- und Objekterkennungssystem integriert Laser-Positionierung, Objekterkennung und Fernsteuerung über die Blynk Cloud-Plattform. Mit einem ESP32-Mikrocontroller, zwei Servomotoren, einem Lasermodul und einem PIR-Sensor bietet es präzise Lasersteuerung und Echtzeit-Objekterkennung. Der ESP32 verbindet sich mit Wi-Fi und der Blynk-App, sodass Benutzer das System aus der Ferne steuern, Parameter festlegen und Feedback zu Winkeln und Erkennungsstatus erhalten können. Das System berechnet Winkel und passt die Servos basierend auf empfangenen Entfernungswerten an, während der PIR-Sensor Bewegungen erkennt, um Aktionen auszulösen. Die Blynk-App bietet vielseitige Funktionen wie Spielmodi, automatisierte Übungen und benutzerdefinierte Konfigurationen, die für Bildungs-, Interaktions- und Automatisierungsanwendungen geeignet sind.

###### Projektanforderungen

- ESP32-Entwicklungsboard
- Zwei Servomotoren
- Laserdiode mit Treiberschaltung
- PIR-Bewegungssensor
- Stromversorgung für ESP32, Servomotoren und Lasermodul
