---
#preview
title: Smart Inverter Design
image: /assets/project/details/inverter-cover-2.png
category: Hardware
category_slug: Hardware
type: Inverter control system, prototype UPS development, hardware integration
team: Alexander Bravo
date: 2021-2023

#full details
details:
    items:
        - label: "Client:"
          value: AEG PS

        - label: "Start:"
          value: Dec 18, 2022
        
        - label: "Ending:"
          value: Mar 18, 2023
        
        - label: "Website:"
          value: https://wemalo.com/en/

gallery: 
    items:
        - image: /assets/project/details/inverter-cover-2.png
          alt: "image"

        - image: /assets/project/details/inverter-1.png
          alt: "image"

additional:
    heading: Project Result
    content: "<p>In this FPGA based project PWM (Pulse Width Modulation) technique used to control power delivery to electrical devices by varying the width of pulses in  signal. It is achieves this by comparing a controller output signal with a reference triangular signal, generating a series of pulses that adjust the switching state of the device. This precise control allows for efficient regulation of motor speeds, LED brightness, and power supplies.</p>"
---

### Description

This project outlines the target system for the grid simulation. The hardware of the target system is an inverter, which is part of a prototype UPS system. This initiative involves developing a completely new control system for the inverter. Consequently, it is essential to identify the control plant, which is also addressed in this project.

###### Project Requirement

**1. Inverter Control Strategy:**

- Implement a control strategy for an inverter system that uses Pulse Width Modulation (PWM).
- The PWM technique should be used to control the output voltage of the inverter.

**2. PWM Signal Generation:**

- Generate PWM signals by comparing a reference signal (controller output signal) with a triangular carrier signal.
- Ensure that the PWM signals switch states based on the comparison results to modulate the inverter output.

**3. Controller Output Signal**

- The controller output signal must be designed to follow the desired output voltage of the inverter.
- This signal will be used as a reference to generate the PWM signals.

**4. Triangular Signal Characteristics**

- Define the triangular signal which will be used as the carrier for PWM generation.
- Ensure the triangular signal maintains consistent amplitude and frequency suitable for the inverter operation.

**5. Signal Comparison**

- Implement a mechanism to compare the controller output signal with the triangular signal.
- The comparison should generate a PWM compare signal which dictates the switching states of the inverter.

**5. Switching State Control**

- Define the switching states for the inverter based on the PWM compare signal.
- Ensure the switching states appropriately modulate the inverter output to achieve the desired voltage.

###### Design and Implementation

**1. Schematic Design:**

- Create the schematic diagram for the inverter circuit using Pulsonix software.
- Include all necessary components and connections as per the inverter control strategy.

**2. Firmware Development:**

- Develop the coding for the inverter control and PWM signal generation using Vivado.
- Ensure the firmware accurately implements the control strategy and PWM generation logic.
