# ItemEditableInfo

## Normal state
We use these items editable info in cases in which we show an editable (or not) dynamic info that was previously given by a member.
In this case we need to know both the label and the value of what was input.

## Behaviour
We could display several items on the same line.
When user activates it, it launches a modal to edit the value if it's editable.
It does nothing if it's in readonly mode.

## Long texts
Label can’t go on more than 1 line. If too long we display “…” at the end.
There’s no limitation on the number of lines for the value though.

## Examples

<!-- STORY -->

