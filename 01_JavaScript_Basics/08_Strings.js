

  const name = "Soumyadip"
  const repoCount =22;
  
    console.log("My name is " + name + " and I have " + repoCount + " repositories on GitHub."); // My name is Soumyadip and I have 22 repositories on GitHub.
    console.log(`My name is ${name} and I have ${repoCount} repositories on GitHub.`); // My name is Soumyadip and I have 22 repositories on GitHub.


    const gameName = new String('Soumyadip');

    console.log(gameName); // [String: 'Soumyadip']
    console.log(typeof gameName); // object
    console.log(gameName[0]); // s
    console.log(gameName.__proto__); // {}
    console.log(gameName.length); // 8
    console.log(gameName.toUpperCase()); // SOUMYADIP
    console.log(gameName.toLowerCase()); // soumyadip
    console.log(gameName.indexOf('dip')); // 5
    console.log(gameName.lastIndexOf('dip')); // 5
    console.log(gameName.charAt(0)); // S
    console.log(gameName.charCodeAt(0)); // 83
    console.log(gameName.concat(' Maity')); // Soumyadip Maity
    console.log(gameName.includes('dip')); // true
    console.log(gameName.startsWith('Sou')); // true
    console.log(gameName.endsWith('dip')); // true
    console.log(gameName.slice(0,4)); // Soum
    console.log(gameName.substring(0,4)); // Soum
    console.log(gameName.substr(0,4)); // Soum
    console.log(gameName.replace('dip','')); // Soumya
    console.log(gameName.split('')); // [ 'S', 'o', 'u', 'm', 'y', 'a', 'd', 'i', 'p' ]
    console.log(gameName.trim()); // Soumyadip
    console.log(gameName.repeat(2)); // SoumyadipSoumyadip
    console.log(gameName.toString()); // Soumyadip
    console.log(gameName.valueOf()); // Soumyadip

    const gameName1 = '   Soumyadip  ';
    console.log(gameName1.trim()); // Soumyadip

    const url = 'https://www.google.com';
    console.log(url.startsWith('https')); // true
    console.log(url.replace('https','http')); // http://www.google.com


    const str = 'Soumyadip-Maity';
    console.log(str.split('-')); // [ 'Soumyadip', 'Maity' ]