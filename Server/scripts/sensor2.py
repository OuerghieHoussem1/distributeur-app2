import RPi.GPIO as GPIO
import time
import datetime
""" from luma.core.interface.serial import spi, noop """
""" 
from luma.led_matrix.device import max7219

from luma.core.render import canvas
from luma.core.virtual import viewport
from luma.core.legacy import text, show_message, textsize
from luma.core.legacy.font import proportional, CP437_FONT, TINY_FONT, SINCLAIR_FONT, LCD_FONT """

""" serial = spi(port=0, device=0, gpio=noop()) """
""" device = max7219(serial, cascaded=4, block_orientation=-90) """
id = 1
print ("Pass your card please")

with open('/dev/tty0', 'r') as tty:
	while True:
		#cek apakah power ON
		rfid = tty.readline()
		time.sleep(0.5)
		if rfid:
			rfid = str(rfid)[:10]
			msg = rfid
			print (msg)

		time.sleep(0.5)

		
""" device.clear()	 """