﻿// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var leftNav = context.variableManager.getValue("v_leftNav");
if (leftNav==null) {
        context.fail("Variable 'myVar' not found");
}

logger.debug("ComputedValue="+leftNav);

// Do some computation using the methods
// you defined in the JS Library
//var computedValue = myLibraryFunction(myVar);
//logger.debug("ComputedValue="+computedValue);

// Inject the computed value in a runtime variable
//context.variableManager.setValue("computedVar",computedValue);



//var leftNavString = context.variableManager.getValue("myVar");
//if (myVar==null) {
//        context.fail("Variable 'myVar' not found");