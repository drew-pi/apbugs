---
title: Stack Buffer Overflow
description: Built an exploit that identified a memory-safety flaw in a restricted browser program and used it to take control of the program’s execution.
github:
links:
  # - display_name:
  #   link:
  # - display_name:
  #   link:
img:
img_alt:
tags: [systems, security]
tools:
  [
    C,
    RISC-V Assembly,
    Python,
    QEMU,
    GDB,
    RISC-V GCC Cross-Compiler,
    GNU Assembler,
    objdump,
    xxd,
    Bash,
  ]
date: 2025
---

### tldr;

Reverse-engineered a vulnerable RISC-V binary and developed a working stack buffer-overflow exploit despite a NetID-dependent memory layout designed to prevent students from sharing hardcoded addresses. Used QEMU and GDB to inspect registers, trace assembly instructions, and calculate the exact offset required to overwrite the saved return address. Constructed a Python-generated payload containing handwritten RISC-V shellcode that bypassed URL validation, hijacked control flow, printed an arbitrary message, and exited cleanly—demonstrating full control over the program’s execution.

### full story

During the spring of my sophomore year, I took CS 3410, Cornell’s Computer System Organization and Programming course. It was the class that first introduced me to systems-level thinking: how a C program is translated into assembly, how the processor executes individual instructions, how memory is organized, and how performance can change based on instruction order, pipelining, and cache behavior. It made computers feel much less abstract because I could finally trace what was happening beneath the code I wrote.

One of the most interesting assignments was a stack buffer-overflow exploit on a RISC-V program. The program simulated a very simple browser. It asked the user, “Where to connect?” and only accepted Cornell’s computer science website. Entering anything else caused the program to print an error and exit. The goal of the assignment was similar to a small capture-the-flag challenge: find a security vulnerability, understand the program’s memory layout, and construct an input that would take control of its execution.

The vulnerability was caused by a mismatch between the size of the input buffer and the amount of data the program allowed itself to read. The program created a 50-byte character array on the stack but used fgets as though the buffer could hold up to 500 bytes. If the input exceeded the allocated space, the additional bytes would overwrite nearby stack memory. That nearby memory included the function’s saved return address, which tells the processor where to continue after the function finishes. By overwriting that address, I could redirect the program to execute code from a location I controlled.

There was another obstacle: the input still had to pass the URL check. The program only compared the characters before the first whitespace character. That meant I could begin the input with the valid Cornell URL, add a space, and place the rest of the exploit after it. The comparison only saw the legitimate URL, but the entire input had already been copied into the undersized buffer.

The assignment also included a simplified form of address-space layout randomization. The program used my Cornell ID to shift the stack to a student-specific memory address. As a result, every student had to determine their own addresses rather than copying someone else’s exploit. I ran the RISC-V binary through QEMU and attached GDB, the GNU Debugger, to inspect registers and memory. I stepped through the assembly instructions, examined the stack, and determined exactly how many bytes were needed to reach the saved return address.

This was the most time-consuming part of the project. Most incorrect attempts either crashed immediately or produced no output, so I had to debug carefully rather than guess. I changed one value at a time, checked where each section of the payload appeared in memory, and revised assumptions when the observed stack layout did not match what I expected.

Once I found the correct offset and target address, I constructed the final payload in several parts. It began with the valid URL and a space, followed by padding to reach the saved return address. I then replaced that address with a pointer to memory containing a small sequence of RISC-V instructions that I had written myself. Those instructions called the program’s existing print function, displayed a message of my choosing, and then exited cleanly.

I generated the payload with a Python script and stored it as a binary file. The script combined the URL prefix, padding, replacement return address, machine-code instructions, and the message to print. I then piped the file into the program under QEMU and used GDB to verify that execution jumped into my injected code.

When the exploit finally worked, the program printed my message and exited successfully instead of following its normal execution path. The assignment gave me a much more concrete understanding of stack frames, return addresses, assembly, endianness, and memory safety. It showed me how small mistakes in memory handling can completely change a program’s behavior and create serious security vulnerabilities. More importantly, it taught me how to approach difficult low-level debugging: inspect the actual program state, test one assumption at a time, and be willing to discard an explanation as soon as the evidence contradicts it.
