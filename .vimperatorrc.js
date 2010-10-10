// .vimperator.js
// for 2.2

// aでautopagerize切り替え
    let evaluateXPath = util.evaluateXPath || buffer.evaluateXPath;
    mappings.addUserMap(
      [modes.NORMAL],
      ['a'],
      'Toggle AutoPagerize',
      function (motion, count, arg) {
        buffer.followLink(
          evaluateXPath('id("autopagerize_help")/div/a[@class="autopagerize_link"]').snapshotItem(0)
        );
      },
      {}
    );

// multi_requester.js
/* DEFAULT SITES */
liberator.globalVariables.multi_requester_default_sites = "alc,goo,favotter-new,twitter-search-pcod-no-jp,search-twitter,wikipedia-ja"

/* KEY MAPPING */
liberator.globalVariables.multi_requester_mappings = [
	[',mt', 'twitter-search-pcod-no-jp'],
	[',Mt', 'twitter-search-pcod-no-jp', '!'],
	[',mT', 'twitter-search-pcod-no-jp',    , '["revivre"]'],
	[',MT', 'twitter-search-pcod-no-jp', '!', '["revivre"]'],
	[',mf', 'favotter-new'],
	[',Mf', 'favotter-new', '!'],
	[',mF', 'favotter-new',    ,'["revivre"]'],
	[',MF', 'favotter-new', '!', '["revivre"]'],
	[',ma', 'alc'],
	[',Ma', 'alc', '!'],
	[',mg', 'goo'],
	[',Mg', 'goo', '!'],
	[',mw', 'wikipedia-ja'],
	[',Mw', 'wikipedia-ja', '!']
];


// auto_word_select.js
liberator.registerObserver("enter", function() {
  // for auto_word_select.js
  mappings.addUserMap(
    [modes.AUTO_WORD_SELECT],
    ["e"],
    "Translate selected word by multi_requester.js.",
    function() {
      // FIXME:
      // A present mode is preserved in the stack beforehand by the push() method
      // because it doesn't return to AUTO_WORD_SELECT mode before that when
      // returning from the OUTPUT_MULTILINE mode.
      modes.push(modes.AUTO_WORD_SELECT, null, true);

      var selText = content.getSelection().toString();
      var pattern = /[a-zA-Z]+/;
      selText = pattern.test(selText) ? pattern.exec(selText) : selText;
      events.feedkeys(":mr alc " + selText + "<CR>", true, true);
    }
  );
});

// copy.js
//liberator.globalVariables.copy_use_wedata = true;
liberator.globalVariables.copy_templates = [
	{ label: 'bitlyURL', value: '%bitURL%', custom: function() { return plugins.bitly.get(buffer.URL);}},
	{ label: 'URLAndtitle',     value: '%URL% - %TITLE%' },
	{ label: 'url',             value: '%URL%' },
	{ label: 'title',     value: '%TITLE%' },
	{ label: 'titleAndURL',     value: '%TITLE% - %URL%' }
];

// localKeymode.js
liberator.globalVariables.localKeyMappings=[
  [/^http:¥/¥/www¥.nicovideo¥.jp¥/watch/, [
    ['p', ':nicopause'],
    ['m', ':nicomute'],
    ['v', ':nicommentvisible'],
    ['s', ':nicoseek! +10'],
    ['S', ':nicoseek! -10'],
    ['z', ':nicosize'],
    ['c', ':nicomment ', true],
    ['C', ':nicommand ', true],
  ]],
];

// finished
//liberator.echo('.vimperator.js sourced.');
