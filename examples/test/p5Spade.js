var P5Spade = function(id, data) {
    this.id = id;
    this.data = data;
    this.editor;
    this.p5;
    this.$id = $('#' + this.id);
    this.create(this.id);
    this.play(this);
}

P5Spade.prototype.create = function() {
    var self = this;
    this.$id
        .append($('<div>').addClass('p5canvas'))
        .append(
            $('<div>').addClass('editorcontainer')
            .append($('<div>').addClass('transport').html('<button class="playbutton">play</button>'))
            .append($('<div>').addClass('editor'))
            
        );

    var editor = this.$id.find('.editor').get(0);
    this.editor = ace.edit(editor);
    this.editor.setValue(this.data);
    this.editor.setTheme("ace/theme/tomorrow");
    this.editor.getSession().setMode("ace/mode/javascript");

    this.editor.commands.addCommand({
        name: 'myCommand',
        bindKey: {win: 'Ctrl-R',  mac: 'Ctrl-Enter'},
        exec: function(editor) {
            self.play(self);
        },
        readOnly: false
    });

    var $run = this.$id.find('.playbutton');
    $run.click(function() {
        self.play(self);
    });
    $(window).resize(function() {
        self.resize(self);
    });
}

P5Spade.prototype.play = function(instance) {
    var canvas = instance.$id.find('.p5canvas').empty().get(0);
    var editor = instance.editor;

    instance.p5 = new p5(function(p) {
        p.setup = function() {
            if (typeof setup == 'function') {
                setup();
            }
        }
        p.draw = function() {
            draw();
        }
        p.keyPressed = function() {
            if (typeof keyPressed == 'function') {
                keyPressed();
            }
        }
        p.keyTyped = function() {
            if (typeof keyTyped == 'function') {
                keyTyped();
            }
        }
        with (p) {
            var v = editor.getValue();
            try {
                eval(v);
            }
            catch(err) {
                console.log(err);
            }
        }
    }, canvas);

    instance.resize(instance);
}

P5Spade.prototype.resize = function(instance) {
    var ec = instance.$id.find('.editorcontainer');
    var cw = instance.$id.find('canvas').width();
    ec.width($(window).width()  - cw);
    ec.height($(window).height());
    ec.width(instance.$id.find('.p5canvas').width(cw));
}

P5Spade.prototype.reset = function() {
}
