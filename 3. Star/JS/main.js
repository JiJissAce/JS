const blank = 9;

for(let i = 0 ; i < 5 ; i++) {
	console.log(' '.repeat(blank+(4-i))+'*'.repeat(1+i*2));
}
for(let i = 0 ; i < 5 ; i++) {
	console.log(' '.repeat(i*2)+'*'.repeat(blank*3 - i*4));
}
for(let i = 0 ; i < 5 ; i++) {
	console.log(' '.repeat(blank - i*2)+'*'.repeat(blank + i*4));
}
