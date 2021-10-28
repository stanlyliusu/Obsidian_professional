# SII EEPROM
- ## Overview
	- ESC use a mandatory MVRAM(typically a serial EEPROM with I2C interface) to store EtherCAT Slave Information(ESI). EEPROM sizes from 1K bit up to 4 Mbit are supported.
		- ![](https://stanlyliusuphoto-1259435273.cos.ap-shanghai.myqcloud.com/img/202110251229513.png)
		- word 0 to 63 is mandatory.
		- general category is mandatory.
		- absolute minimum SII EEPROM size is 2Kbit.
		- ESC configuratio area is used by ESC for configuration.
		- other parts are used by the master or local app.
- ## SII EEPROM Logic Interface
	- Interface register overview: ![](https://stanlyliusuphoto-1259435273.cos.ap-shanghai.myqcloud.com/img/202110251657190.png)
		- the interface is either controlled by EtherCAT or by PDI.
		- Initially by EtherCAT.
		- It can transfer access to the PDI.
		- three command type:
			- write to one EEPROM address (1 Word== 2 bytes)
			- read from EEPROM(2 or 4 Words, depending on ESC)
			- reload
	- SII EEPROM Errors
	- SII EEPROM Interface Assignment to ECAT/PDI
	- Read/Write/Reload Example
	- EEPROM Emulation
- ## SII EEPROM Content
	- ESC Configuration Area(EEPROM word addresses 0 to 7) is automatically read by the ESC after power-on or reset.
		***what about in Emulation mode?? this data is assigned by ucontroller or ESC automatically read??***
		- Master can invoke reolad the EEPROM content. 
			- Not transferred during reload:
				- [[ESC Register Configured Station Alias (0x0012-0x0013)]]
				- bits [1,4,5,6,7] of [[ESC Register ESC Configuration (0x0141)]](enhanced link detction) 
		- register description:![](https://stanlyliusuphoto-1259435273.cos.ap-shanghai.myqcloud.com/img/202110251645190.png)
- ## SII EEPROM Electrical Interface(I2C)??





