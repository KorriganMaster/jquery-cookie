test("Create cookie", function() {
	expect(1);
	$.cookie({name: "cookie", value: "value"});
	strictEqual(document.cookie, "cookie=value", "Should be equal");
});

test("Read cookie",  function() {
	expect(1);
	strictEqual($.cookie("read", "cookie"), "value", "Should be equal");
});

test("Update cookie", function() {
	expect(1);
	$.cookie({name: "cookie", value: "my new value"});
	strictEqual(document.cookie, "cookie=my new value", "Should be equal");
});

test("Delete cookie", function() {
	expect(1);
	$.cookie("delete", "cookie");
	strictEqual(document.cookie, '', "Should be equal");
});
