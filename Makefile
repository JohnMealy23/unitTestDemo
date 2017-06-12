
check:
	mocha -d -c --full-trace --compilers js:babel-core/register ./tests/**/*.js

check-file:
	nyc mocha -d -c -v --full-trace --compilers js:babel-core/register $(file)

