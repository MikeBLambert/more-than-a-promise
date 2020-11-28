/** PULL vs PUSH */

/** STREAM - any data source that unfolds over time. */

/** OBSERVABLE - wrapper for data that can be subscribed to.
    * pipe for data.
    * Subscriber will be notified any time data changes.
    *
  * of() - creates observable of data passed to it.
  * from() - iterates over data passed to it.
  * fromEvent() - creates observable from DOM event.
  * interval() - creates an event on a specified interval.
  * pipe()
 * */

/** HOT vs COLD (Observable vs Subject/BehaviorSubject) */

/** OPERATORS
 * map()
 * filter()
 * scan()
 * take()
 * tap()

 * backpressure operators:
    * debounceTime()
    * throttle()
    * bufferCount()

 * switchMap()
 */

/** MEMORY LEAKS
 * unsubsribe()
 * takeWhile()
 * takeUntil( )
 */
