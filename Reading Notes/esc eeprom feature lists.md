# SII EEPROM
ESC use a mandatory MVRAM(typically a serial EEPROM with I2C interface) to store EtherCAT Slave Information(ESI). EEPROM sizes from 1K bit up to 4 Mbit are supported.

![](https://stanlyliusuphoto-1259435273.cos.ap-shanghai.myqcloud.com/img/202110251229513.png)

1. word 0 to 63 is mandatory.
2. 

- SII EEPROM Content
- SII EEPROM Logic Interface
	- SII EEPROM Errors
	- SII EEPROM Interface Assignment to ECAT/PDI
	- Read/Write/Reload Example
	- EEPROM Emulation
- SII EEPROM Electrical Interface(I2C)??