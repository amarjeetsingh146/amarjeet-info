import Link from 'next/link';

export const metadata = {
  title: 'Embedded Systems',
  description: 'A structured roadmap for learning Embedded Systems and Drone Flight Controllers.',
};

export default function EmbeddedSystemsPage() {
  return (
    <div className="page-content">
      <h2 className="text-[13px] font-bold tracking-[2px] uppercase text-[#888] mb-4">Foundations</h2>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <Link href="/deep-dive/embedded-systems/intro-embedded" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Intro to Embedded Systems <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/embedded-systems/electronics-fundamentals" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Electronics Fundamentals <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/embedded-systems/stm32-architecture" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">STM32 Architecture <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/embedded-systems/stm32-development-environment" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Development Environment <span className="text-[16px] font-bold">↗</span></Link>
      </div>

      <h2 className="text-[13px] font-bold tracking-[2px] uppercase text-[#888] mt-8 mb-4">Peripherals & Communication</h2>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <Link href="/deep-dive/embedded-systems/gpio-digital-io" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">GPIO & Digital I/O <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/embedded-systems/timers-pwm" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Timers & PWM <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/embedded-systems/uart-communication" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">UART <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/embedded-systems/spi-communication" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">SPI <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/embedded-systems/i2c-communication" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">I2C <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/embedded-systems/adc-dac" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">ADC & DAC <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/embedded-systems/interrupts-dma" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Interrupts & DMA <span className="text-[16px] font-bold">↗</span></Link>
      </div>

      <h2 className="text-[13px] font-bold tracking-[2px] uppercase text-[#888] mt-8 mb-4">Operating Systems</h2>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <Link href="/deep-dive/embedded-systems/real-time-systems" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Real-Time Systems <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/embedded-systems/rtos-freertos" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">RTOS (FreeRTOS) <span className="text-[16px] font-bold">↗</span></Link>
      </div>

      <h2 className="text-[13px] font-bold tracking-[2px] uppercase text-[#888] mt-8 mb-4">Drone Flight Control</h2>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <Link href="/deep-dive/embedded-systems/sensor-integration" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Sensor Integration <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/embedded-systems/flight-control-fundamentals" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Flight Control Fundamentals <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/embedded-systems/pid-controller" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">PID Controller <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/embedded-systems/imu-sensor-fusion" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">IMU & Sensor Fusion <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/embedded-systems/esc-brushless-motors" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">ESC & Brushless Motors <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/embedded-systems/drone-flight-controller" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Drone Flight Controller <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/embedded-systems/final-drone-project" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Final Drone Project <span className="text-[16px] font-bold">↗</span></Link>
      </div>
    </div>
  );
}
