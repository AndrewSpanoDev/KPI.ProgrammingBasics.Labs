//Функції - інтроспеція об'єкта
"use strict";

const createIp = (ip) => {
	ip = ip.split(".").map(Number);
	return (ip[0] << 24) + (ip[1] << 16) + (ip[2] << 8) + ip[3];
};

console.log(createIp("192.168.31.1"));

const makeIpReduce = (ip) => {
	ip = ip
		.split(".")
		.map(Number)
		.reduce((acc, byte, index) => acc + (byte << (8 * (3 - index))), 0);
	return ip;
};

console.log(makeIpReduce("192.168.31.1"));