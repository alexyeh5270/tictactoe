def packetEncoder(packet):
    packet = packet.encode() #String to bytes
    hexString = packet.hex() #Bytes to Hex
    return hexString #Results in String to Hex

