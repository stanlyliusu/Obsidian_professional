# SII EEPROM
ESC use a mandatory MVRAM(typically a serial EEPROM with I2C interface) to store EtherCAT Slave Information(ESI). EEPROM sizes from 1K bit up to 4 Mbit are supported.

![](https://stanlyliusuphoto-1259435273.cos.ap-shanghai.myqcloud.com/img/202110251229513.png)

1. word 0 to 63 is mandatory.
2. general category is mandatory.
3. absolute minimum SII EEPROM size is 2Kbit.
4. ESC configuratio area is used by ESC for configuration.
5. other parts are used by the master or local app.

- SII EEPROM Content
	- ESC Configuration Area(EEPROM word addresses 0 to 7) is automatically read by the ESC after power-on or reset.
		***what about in Emulation mode?? this data is assigned by ucontroller or ESC automatically read??***
	- Master can invoke reolad the EEPROM content.
		- Station Alias reg 0x0012:0x0013 and ESC configuration reg bits 0x0141[1,4,5,6,7](enhanced link detction) are not transferred when reloaded. They are only transfterred at the initial EEPROM loading after pwoer-on or reset.
- SII EEPROM Logic Interface
	- SII EEPROM Errors
	- SII EEPROM Interface Assignment to ECAT/PDI
	- Read/Write/Reload Example
	- EEPROM Emulation
- SII EEPROM Electrical Interface(I2C)??