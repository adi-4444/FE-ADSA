ss = "ab" // "", "a", "b", "c", "ac", "ab", "bc", "abc"
function noOfSubSet(s, i, cs) {
    if(i== s.length) {
        console.log(cs)
        return;
    }
    noOfSubSet(s, i+1, cs+s[i]);
    noOfSubSet(s, i+1, cs);
}
noOfSubSet(ss, 0, "");
// noOfSubset(ss, 1, "a")
   //noOfSubset(ss, 2, "ab") : "ab"
   //noOfSubset(ss, 2, "a") : "a"
// noOfSubset(ss, 1, "")
   // noOfSubset(ss, 2, "b") : "b"
   // noOfSubset(ss, 2, "") : ""