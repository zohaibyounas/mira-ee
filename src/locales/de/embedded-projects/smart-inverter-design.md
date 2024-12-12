---
#preview
title: Intelligente Wechselrichter-Entwicklung
image: /assets/project/details/inverter-cover-2.png
category: Hardware
category_slug: Hardware
type: Wechselrichter-Steuerungssystem, Prototyp UPS-Entwicklung, Hardware-Integration
team: Alexander Bravo
date: 2021-2023

#full details
details:
    items:
        - label: "Kunde:"
          value: AEG PS

        - label: "Start:"
          value: 18. Dez. 2022
        
        - label: "Ende:"
          value: 18. März 2023
        
        - label: "Website:"
          value: https://wemalo.com/en/

gallery: 
    items:
        - image: /assets/project/details/inverter-cover-2.png
          alt: "Bild"

        - image: /assets/project/details/inverter-1.png
          alt: "Bild"

additional:
    heading: Projektergebnis
    content: "<p>In diesem FPGA-basierten Projekt wird die PWM (Pulsweitenmodulation) Technik verwendet, um die Stromversorgung von elektrischen Geräten zu steuern, indem die Pulsbreite des Signals variiert wird. Dies wird erreicht, indem das Ausgangssignal des Controllers mit einem Referenzdreieckssignal verglichen wird, wodurch eine Reihe von Impulsen erzeugt wird, die den Schaltzustand des Geräts anpassen. Diese präzise Steuerung ermöglicht eine effiziente Regelung der Motorgeschwindigkeit, LED-Helligkeit und Stromversorgung.</p>"

---

####### Projektanforderung

**1. Wechselrichter-Steuerungsstrategie:**

- Implementierung einer Steuerungsstrategie für ein Wechselrichtersystem, das die Pulsweitenmodulation (PWM) verwendet.
- Die PWM-Technik soll verwendet werden, um die Ausgangsspannung des Wechselrichters zu steuern.

**2. PWM-Signal-Erzeugung:**

- Erzeugen von PWM-Signalen durch den Vergleich eines Referenzsignals (Ausgangssignal des Controllers) mit einem dreieckigen Trägersignal.
- Sicherstellen, dass die PWM-Signale den Zustand basierend auf den Vergleichsergebnissen wechseln, um die Ausgangsspannung des Wechselrichters zu modulieren.

**3. Ausgangssignal des Controllers:**

- Das Ausgangssignal des Controllers muss so gestaltet werden, dass es der gewünschten Ausgangsspannung des Wechselrichters folgt.
- Dieses Signal wird als Referenz zur Erzeugung der PWM-Signale verwendet.

**4. Eigenschaften des dreieckigen Signals:**

- Definieren des dreieckigen Signals, das als Träger für die PWM-Generierung verwendet wird.
- Sicherstellen, dass das dreieckige Signal eine konstante Amplitude und Frequenz aufweist, die für den Betrieb des Wechselrichters geeignet sind.

**5. Signalvergleich:**

- Implementieren eines Mechanismus zum Vergleichen des Ausgangssignals des Controllers mit dem dreieckigen Signal.
- Der Vergleich sollte ein PWM-Vergleichssignal erzeugen, das den Schaltzustand des Wechselrichters bestimmt.

**5. Steuerung des Schaltzustands:**

- Definieren der Schaltzustände für den Wechselrichter basierend auf dem PWM-Vergleichssignal.
- Sicherstellen, dass die Schaltzustände den Wechselrichterausgang entsprechend modulieren, um die gewünschte Spannung zu erreichen.

###### Design und Implementierung

**1. Schaltplan-Design:**

- Erstellen des Schaltplans für den Wechselrichterschaltkreis unter Verwendung der Pulsonix-Software.
- Alle notwendigen Komponenten und Verbindungen gemäß der Wechselrichter-Steuerungsstrategie einfügen.

**2. Firmware-Entwicklung:**

- Entwickeln des Codes für die Wechselrichtersteuerung und PWM-Signal-Generierung unter Verwendung von Vivado.
- Sicherstellen, dass die Firmware die Steuerungsstrategie und die PWM-Generierungslogik korrekt implementiert.
