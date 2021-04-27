function foo()
{
   // if user accidentally omits the new keyword, this will 
   // silently correct the problem...
   if ( !(this instanceof foo) )
      return new foo();

   // constructor logic follows...
}
