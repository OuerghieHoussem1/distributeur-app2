import RPi.GPIO as GPIO
import time
import datetime

from luma.led_matrix.device import max7219
from luma.core.interface.serial import spi, noop
from luma.core.render import canvas
from luma.core.virtual import viewport
from luma.core.legacy import text, show_message, textsize
from luma.core.legacy.font import proportional, CP437_FONT, TINY_FONT, SINCLAIR_FONT, LCD_FONT

serial = spi(port=0, device=0, gpio=noop())
device = max7219(serial, cascaded=4, block_orientation=-90)
id = 1
print ("Untuk menampilkan ID RFID pada LED")

with open('/dev/tty0', 'r') as tty:
	while True:
		#cek apakah power ON
		rfid = tty.readline()
		time.sleep(0.5)
		if rfid:
			rfid = str(rfid)[:10]
			msg = rfid
			print (msg)
			show_message(device, msg, fill="white", font=proportional(CP437_FONT),scroll_delay=0.04)

		time.sleep(0.5)

		
device.clear()	